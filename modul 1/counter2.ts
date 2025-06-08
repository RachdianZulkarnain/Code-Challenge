/* problem : javascript
Tulislah fungsi createCounter. Fungsi ini harus menerima sebuah bilangan bulat awal init. Fungsi tersebut harus mengembalikan sebuah objek dengan tiga fungsi.
Tiga fungsi tersebut adalah:
increment() meningkatkan nilai saat ini sebesar 1 lalu mengembalikannya.
decrement() mengurangi nilai saat ini sebesar 1 lalu mengembalikannya.
reset() mengatur ulang nilai saat ini ke init lalu mengembalikannya.

Contoh 1:
Input:
init = 5, calls = ["increment", "reset", "decrement"]
Output: [6, 5, 4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

Contoh 2:
Input:
init = 0, calls = ["increment", "increment", "decrement", "reset", "reset"]
Output: [1, 2, 1, 0, 0]
Explanation:
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
*/

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let currentValue = init;
  return {
    increment: () => {
      currentValue += 1;
      return currentValue;
    },
    decrement: () => {
      currentValue -= 1;
      return currentValue;
    },
    reset: () => {
      currentValue = init;
      return currentValue;
    },
  };
}

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());

const counter2 = createCounter(0);
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());
console.log(counter2.reset());
console.log(counter2.reset());
