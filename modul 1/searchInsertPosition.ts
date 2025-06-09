/* problem : Algorithms
Diberikan sebuah array yang sudah diurutkan berisi bilangan bulat yang berbeda dan sebuah nilai target, kembalikan indeks jika target ditemukan. Jika tidak ditemukan, kembalikan indeks di mana target seharusnya berada jika dimasukkan secara berurutan.

Anda harus menulis algoritma dengan kompleksitas waktu O(log n).

Contoh:
Contoh 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Contoh 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Contoh 3:
Input: nums = [1,3,5,6], target = 7
output : 4
*/
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
