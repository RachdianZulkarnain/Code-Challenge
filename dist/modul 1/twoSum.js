"use strict";
/* problem : Algorithms
Diberikan sebuah array bilangan bulat nums dan sebuah bilangan bulat target, kembalikan indeks dari dua angka sehingga jumlahnya sama dengan target.
Anda dapat mengasumsikan bahwa setiap masukan akan memiliki tepat satu solusi, dan Anda tidak boleh menggunakan elemen yang sama dua kali.
Anda dapat mengembalikan jawaban dalam urutan apa pun.

Menggunakan Map untuk Efisiensi:
Map menyimpan pasangan (nilai, indeks) dari elemen array
Memungkinkan pencarian komplemen dalam waktu O(1)
Mekanisme Utama:
Untuk setiap elemen nums[i]:
Hitung complement = target - nums[i]
Jika complement ada di Map, langsung kembalikan [indeks_complement, i]
Jika tidak, simpan nums[i] beserta indeksnya ke Map
Contoh Eksekusi:

nums = [3, 3], target = 6:

Iterasi 1: Simpan (3, 0)

Iterasi 2: Temukan komplemen 3 (sudah ada di indeks 0) → Kembalikan [0, 1]

Contoh 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Contoh 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Contoh 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 */
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum1(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
    return [];
}
console.log(twoSum1([2, 7, 11, 15], 9));
console.log(twoSum1([3, 2, 4], 6));
console.log(twoSum1([3, 3], 6));
