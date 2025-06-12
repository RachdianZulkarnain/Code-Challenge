"use strict";
/* Problem : javascript
Tulis sebuah fungsi createHelloWorld. Fungsi ini harus mengembalikan sebuah fungsi baru yang selalu mengembalikan "Hello World".

Contoh 1:
Input: args = []
Output: "Hello World"
Penjelasan:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".

Contoh 2:
Input: args = [{}, null, 42]
Output: "Hello World"
Penjelasan:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
*/
Object.defineProperty(exports, "__esModule", { value: true });
function createHelloWorld() {
    return function (...args) {
        return "Hello World";
    };
}
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction());
console.log(helloWorldFunction(123, "abc", {}));
console.log(helloWorldFunction(null, undefined));
