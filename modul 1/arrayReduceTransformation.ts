/* Problem : Javascript
Diberikan sebuah array integer nums, sebuah fungsi reducer fn, dan nilai awal init, kembalikan hasil akhir yang diperoleh dengan menjalankan fungsi fn pada setiap elemen array secara berurutan, 
dengan memasukkan nilai hasil perhitungan dari elemen sebelumnya.
Hasil ini dicapai melalui operasi berikut: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... hingga setiap elemen dalam array diproses.
Nilai akhir val kemudian dikembalikan. Jika panjang array adalah 0, fungsi harus mengembalikan init.

Harap selesaikan tanpa menggunakan metode bawaan Array.reduce.

Contoh 1:
Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Penjelasan:
Nilai awal init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10

Contoh 2:
Input:
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Penjelasan:
Nilai awal init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130

Contoh 3:
Input:
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Penjelasan: Untuk array kosong, jawabannya selalu init.

*/

type Fn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn, init: number): number {
  //jika array osong, langsung mengembalikan init
  if (nums.length === 0) {
    return init;
  }
  //inisialisasi akumolator dengan nilai awal
  let acc = init;
  //iterasi melalui setiap elemen dalam array
  for (let i = 0; i < nums.length; i++) {
    //menerapkan fungsi reducer pada acumulator dan elemen saat ini
    acc = fn(acc, nums[i]);
  }
  //mengembalikan nilai akumulator akhir
  return acc;
}

const nums1 = [1,2,3,4];// penjumlahan sederhana
const sumFn = (acc : number, curr : number) => acc + curr;
console.log(reduce(nums1, sumFn, 0));

const nums2 = [1,2,3,4];// penjumlahan dengan kuadrat 
const sumSquares = (acc : number, curr: number) => acc + (curr*curr);
console.log((reduce(nums2, sumSquares, 100)));

const emptyNums : number [] = [];// array kosong
const dummyFn = (acc : number, curr :number) => 0;
console.log(reduce(emptyNums, dummyFn, 25));


