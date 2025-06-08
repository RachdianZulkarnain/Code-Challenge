/* Problem : Javascript
Tulis fungsi generator yang mengembalikan objek generator yang menghasilkan urutan bilangan Fibonacci.

Urutan bilangan Fibonacci didefinisikan oleh hubungan 
𝑋𝑛 =𝑋𝑛 − 1 + 𝑋𝑛 − 2.
Beberapa angka pertama dari seri adalah: 0, 1, 1, 2, 3, 5, 8, 13.


contoh 1:

Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3

Contoh 2:
Input: callCount = 0
Output: []
Explanation: gen.next() is never called so nothing is outputted
*/

function* fibGenerator(): Generator<number, any, number> {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    const next = a + b;
    a = b;
    b = next;
  }
}

const generator = fibGenerator();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
