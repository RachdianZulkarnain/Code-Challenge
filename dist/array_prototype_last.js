"use strict";
/* Problem :
Diberikan sebuah bilangan bulat n, kembalikan sebuah fungsi counter. Fungsi counter ini awalnya mengembalikan n, dan
kemudian setiap kali dipanggil berikutnya mengembalikan nilai 1 lebih banyak dari nilai sebelumnya (n, n + 1, n + 2, dst).

Mekanisme Counter:
-> Menggunakan operator post-increment (n++):
-> Saat fungsi dipanggil, nilai n saat ini dikembalikan.
-> Setelah pengembalian nilai, n secara otomatis bertambah 1 untuk panggilan berikutnya.
-> Variabel n dipertahankan dalam closure, sehingga nilai terakhir selalu diingat.

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
Object.defineProperty(exports, "__esModule", { value: true });
Array.prototype.last = function () {
    if (this.length === 0)
        return -1; //jika kosong, kembalikan -1
    return this[this.length - 1]; // ambil elemen
};
const nums = [2, 4, 3];
console.log(nums.last());
const empty = [];
console.log(empty.last());
