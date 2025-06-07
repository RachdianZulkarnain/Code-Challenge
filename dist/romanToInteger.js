"use strict";
/* Problem :
Angka Romawi diwakili oleh tujuh simbol berbeda: I, V, X, L, C, D, dan M.

Simbol	Nilai
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Sebagai contoh:

Angka 2 ditulis sebagai II (dua simbol I ditambahkan).
Angka 12 ditulis sebagai XII (X + II).
Angka 27 ditulis sebagai XXVII (XX + V + II).
Angka Romawi biasanya ditulis dari terbesar ke terkecil (kiri ke kanan). Namun, ada pengecualian untuk:
Angka 4 tidak ditulis IIII, melainkan IV (karena I ditempatkan sebelum V, kita kurangkan 1 dari 5 = 4).
Angka 9 ditulis IX (I ditempatkan sebelum X, kita kurangkan 1 dari 10 = 9).
Ada enam kasus pengurangan:

I sebelum V (5) dan X (10) → membentuk 4 dan 9.

X sebelum L (50) dan C (100) → membentuk 40 dan 90.

C sebelum D (500) dan M (1000) → membentuk 400 dan 900.

Tugas:
Diberikan sebuah angka Romawi (string), konversi menjadi bilangan bulat (integer).

Contoh 1:
Input: s = "III"
Output: 3
Penjelasan: III = 1 + 1 + 1 = 3.

Contoh 2:
Input: s = "LVIII"
Output: 58
Penjelasan: L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58.

Contoh 3:
Input: s = "MCMXCIV"
Output: 1994
Penjelasan:

M = 1000

CM = 900 (karena C sebelum M: 1000 - 100 = 900)

XC = 90 (karena X sebelum C: 100 - 10 = 90)

IV = 4 (karena I sebelum V: 5 - 1 = 4)
Total: 1000 + 900 + 90 + 4 = 1994.

*/
Object.defineProperty(exports, "__esModule", { value: true });
function romanToInt(s) {
    //deklarasi simbol romawi ke nilai numerik
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = romanValues[s[i]]; //mengambil nilai simbol saat ini
        const nextValue = romanValues[s[i + 1]]; //mengambil nilai simbol berikutnya jika ada
        if (nextValue && currentValue < nextValue) {
            total -= currentValue; // mengurangkan nilai
        }
        else {
            total += currentValue; // menambah nilai
        }
    }
    return total;
}
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
