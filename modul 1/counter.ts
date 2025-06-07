/* problem :
Diberikan sebuah bilangan bulat n, kembalikan sebuah fungsi counter. Fungsi counter ini awalnya mengembalikan n, dan
 kemudian setiap kali dipanggil berikutnya mengembalikan nilai 1 lebih banyak dari nilai sebelumnya (n, n + 1, n + 2, dst).

Contoh 1:
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.

Contoh 2:
Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
*/

function createCounter(n: number): () => number {
  // pemanggilan 1 :
  // - mengembalikan nilai n saat ini (10)
  // - kemudian n = n + 1 -> n menjadi 11
  let count = n;
  return function () {
    const currentValue = count;
    // pemanggilan 2 :
    // - mengembalikan nilai n saat ini (-2)
    // - kemudian n = n + 1 -> n menjadi -1
    count += 1;
    return currentValue;
  };
}

const counter1 = createCounter(10);
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(-2);
console.log(counter2());
console.log(counter2());
console.log(counter2());
