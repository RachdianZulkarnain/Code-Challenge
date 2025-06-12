/* Problem : Javascript
Diberikan sebuah array integer nums, kembalikan semua triplet [nums[i], nums[j], nums[k]]sedemikian rupa sehingga i != j, i != k, dan j != k, dan nums[i] + nums[j] + nums[k] == 0.

Perhatikan bahwa himpunan solusi tidak boleh berisi triplet duplikat.

Contoh 1:

Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]
 Penjelasan:  
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. 
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. 
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. 
Triplet yang berbeda adalah [-1,0,1] dan [-1,-1,2]. 
Perhatikan bahwa urutan output dan urutan triplet tidak menjadi masalah.
Contoh 2:

Masukan: nums = [0,1,1]
 Keluaran: []
 Penjelasan: Satu-satunya triplet yang mungkin tidak berjumlah 0.
Contoh 3:

Masukan: nums = [0,0,0]
 Keluaran: [[0,0,0]]
 Penjelasan: Satu-satunya triplet yang mungkin adalah yang jumlahnya 0.
*/

function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  const n = nums.length;
  if (n < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const s = nums[i] + nums[left] + nums[right];
      if (s === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (s < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
