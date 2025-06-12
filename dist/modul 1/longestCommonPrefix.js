"use strict";
/* Problem : javascript
Tulislah sebuah fungsi untuk menemukan prefix (awalan) yang paling panjang di antara sebuah array string.
Jika tidak ada awalan yang sama, kembalikan string kosong "".

Contoh 1:
Input:
strs = ["flower", "flow", "flight"]
Output: "fl"

Contoh 2:
Input:
strs = ["dog", "racecar", "car"]
Output: ""

Penjelasan:
Tidak ada awalan yang sama di antara string input.
*/
Object.defineProperty(exports, "__esModule", { value: true });
function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return "";
    }
    const firststr = strs[0];
    for (let i = 0; i < firststr.length; i++) {
        const char = firststr[i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return firststr.substring(0, i);
            }
        }
    }
    return firststr;
}
// Contoh 1: Input ["flower","flow","flight"]
console.log("Contoh 1:");
console.log('Input: ["flower","flow","flight"]');
console.log('Output: "' + longestCommonPrefix(["flower", "flow", "flight"]) + '"');
// Contoh 2: Input ["dog","racecar","car"]
console.log("\nContoh 2:");
console.log('Input: ["dog","racecar","car"]');
console.log('Output: "' + longestCommonPrefix(["dog", "racecar", "car"]) + '"');
// Contoh 3: Input [] (array kosong)
console.log("\nContoh 3:");
console.log("Input: []");
console.log('Output: "' + longestCommonPrefix([]) + '"');
// Contoh 4: Input ["apple", "app", "april"])
console.log("\nContoh 4:");
console.log('Input: ["apple", "app", "april"]');
console.log('Output: "' + longestCommonPrefix(["apple", "app", "april"]) + '"');
