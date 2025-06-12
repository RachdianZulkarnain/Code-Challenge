"use strict";
/* Problem : algoritms
Tujuh simbol berbeda digunakan untuk mewakili angka Romawi dengan nilai sebagai berikut:

Simbol	Nilai
I	1
V	5
X	10
L	50
C	100
D	500
M	1000

Angka Romawi dibentuk dengan menambahkan nilai tempat desimal dari yang tertinggi hingga yang terendah. Mengonversi nilai tempat desimal menjadi angka Romawi mengikuti aturan berikut:

Jika nilai tidak dimulai dengan 4 atau 9, pilih simbol dengan nilai maksimal yang dapat dikurangkan dari angka masukan, tambahkan simbol tersebut ke hasil, kurangi nilainya, dan konversi sisanya menjadi angka Romawi.

Jika nilai dimulai dengan 4 atau 9, gunakan bentuk pengurangan yang mewakili satu simbol dikurangi dari simbol berikutnya. Sebagai contoh:

4 adalah 1 (I) kurang dari 5 (V): IV.

9 adalah 1 (I) kurang dari 10 (X): IX.
Hanya bentuk pengurangan berikut yang digunakan: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD), dan 900 (CM).

Hanya pangkat 10 (I, X, C, M) yang dapat ditambahkan secara berurutan maksimal 3 kali untuk mewakili kelipatan 10. Simbol 5 (V), 50 (L), atau 500 (D) tidak dapat ditambahkan beberapa kali. Jika Anda perlu menambahkan simbol sebanyak 4 kali, gunakan bentuk pengurangan.

Diberikan sebuah bilangan bulat, konversikan ke dalam angka Romawi.

Contoh 1:
Input:
num = 3749

Output:
"MMMDCCXLIX"

Penjelasan:

3000 = MMM sebagai 1000 (M) + 1000 (M) + 1000 (M)

700 = DCC sebagai 500 (D) + 100 (C) + 100 (C)

40 = XL sebagai 10 (X) kurang dari 50 (L)

9 = IX sebagai 1 (I) kurang dari 10 (X)

Catatan: 49 bukan 1 (I) kurang dari 50 (L) karena konversi didasarkan pada nilai tempat desimal.

Contoh 2:
Input:
num = 58

Output:
"LVIII"

Penjelasan:

50 = L

8 = VIII

Contoh 3:
Input:
num = 1994

Output:
"MCMXCIV"

Penjelasan:

1000 = M

900 = CM

90 = XC

4 = IV

*/
Object.defineProperty(exports, "__esModule", { value: true });
function intToRoman(num) {
    // Daftar nilai dan simbol Romawi dalam urutan menurun
    const valueSymbols = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"],
    ];
    let result = "";
    // Iterasi melalui setiap pasangan nilai-simbol
    for (const [value, symbol] of valueSymbols) {
        // Ulangi simbol selama nilai saat ini bisa dikurangi
        while (num >= value) {
            num -= value; // Kurangi nilai dari angka
            result += symbol; // Tambahkan simbol ke hasil
        }
        // Hentikan iterasi jika angka sudah nol
        if (num === 0)
            break;
    }
    return result;
}
// Contoh penggunaan
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58)); // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"
