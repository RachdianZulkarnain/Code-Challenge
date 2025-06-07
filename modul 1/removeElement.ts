/*
Diberikan sebuah array bilangan bulat nums dan sebuah bilangan bulat val, hapus semua kemunculan val dalam nums secara in-place. Urutan elemen dapat diubah. Kemudian kembalikan jumlah elemen dalam nums yang tidak sama dengan val.
Perhatikan bahwa jumlah elemen dalam nums yang tidak sama dengan val adalah k. Agar dapat diterima, Anda perlu melakukan hal berikut:
Ubah array nums sehingga k elemen pertama berisi elemen-elemen yang tidak sama dengan val.
Elemen-elemen sisanya dalam nums tidak penting, begitu juga dengan ukuran nums.
Kembalikan nilai k.

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.


Contoh 1:
input: nums = [3,2,2,3], val = 3
output: 2, nums = [2,2,_,_]
Penjelasan:
Fungsi harus mengembalikan k = 2 dengan dua elemen pertama nums adalah 2.
Elemen setelah k tidak penting (ditandai dengan _).

Contoh 2:
input: nums = [0,1,2,2,3,0,4,2], val = 2
output: 5, nums = [0,1,4,0,3,_,_,_]
Penjelasan:
Fungsi harus mengembalikan k = 5 dengan lima elemen pertama nums berisi 0, 1, 4, 0, 3 (urutan boleh berbeda).
Elemen setelah k tidak penting (ditandai dengan _).
*/

function removeElement(nums: number[], val: number): number {
  let k = 0; // pointer untuk posisi penempatan elemen yang valid

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1));
console.log(nums1);

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2));
console.log(nums2);
