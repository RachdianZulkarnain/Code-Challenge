/* Problem : javascript
Diberikan sebuah array fungsi [f1, f2, f3, ..., fn], kembalikan sebuah fungsi baru fn yang merupakan komposisi fungsi dari array tersebut.
Komposisi fungsi dari [f(x), g(x), h(x)] adalah fn(x) = f(g(h(x))).
Komposisi fungsi dari daftar fungsi kosong adalah fungsi identitas f(x) = x.
Anda dapat mengasumsikan setiap fungsi dalam array menerima satu bilangan bulat sebagai input dan mengembalikan satu bilangan bulat sebagai output.

Contoh 1:
Input:
functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Penjelasan:
Dievaluasi dari kanan ke kiri...
Dimulai dengan x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65

Contoh 2:
Input:
functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Penjelasan:
Dievaluasi dari kanan ke kiri...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000

Contoh 3:
Input:
functions = [], x = 42
Output: 42
Penjelasan:
Komposisi dari nol fungsi adalah fungsi identitas.
*/

type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x: number): number {
    // jika array kosong, kembalikan x (fngsi identitas)
    if (functions.length === 0) {
      return x;
    }

    // Inisialisasi hasil dengan nilai input x
    let result = x;

    // Iterasi dari fungsi terakhir (indeks tertinggi) ke fungsi pertama (indeks 0)
    for (let i = functions.length - 1; i >= 0; i--) {
      // Terapkan fungsi ke-i pada hasil saat ini
      result = functions[i](result);
    }

    return result;
  };
}

const fn1 = compose([
  (x: number) => x + 1,
  (x: number) => x * x,
  (x: number) => 2 * x,
]);
console.log(fn1(4));

const fn2 = compose([
  (x: number) => 10 * x,
  (x: number) => 10 * x,
  (x: number) => 10 * x,
]);
console.log(fn2(1));

const fn3 = compose([]);
console.log(fn3(42));
