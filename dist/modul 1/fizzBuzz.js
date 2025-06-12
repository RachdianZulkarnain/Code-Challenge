"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* problem : Algorithms
Diberikan sebuah bilangan bulat n, kembalikan sebuah array string answer (dengan indeks mulai dari 1) di mana:
answer[i] == "FizzBuzz" jika i habis dibagi 3 dan 5.
answer[i] == "Fizz" jika i habis dibagi 3.
answer[i] == "Buzz" jika i habis dibagi 5.
answer[i] == i (sebagai string) jika tidak ada kondisi di atas yang terpenuhi.

Contoh:
Contoh 1:
Input: n = 3
Output: ["1", "2", "Fizz"]

Contoh 2:
Input: n = 5
Output: ["1", "2", "Fizz", "4", "Buzz"]

Contoh 3:
Input: n = 15
Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
*/
function fizzBuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else {
            result.push(i.toString());
        }
    }
    return result;
}
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
