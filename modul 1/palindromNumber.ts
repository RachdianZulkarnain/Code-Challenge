/* problem :
Diberikan sebuah bilangan bulat x, kembalikan true jika x merupakan palindrom, dan false jika tidak.

- > Palindrom: Bilangan yang jika dibaca dari kiri ke kanan maupun dari kanan ke kiri tetap sama (contoh: 121, 1331, 0).
- > Bilangan negatif bukan palindrom (contoh: -121 dibalik menjadi 121-, sehingga tidak sama).
- >Bilangan dengan digit terakhir 0 bukan palindrom kecuali bilangan itu 0 itu sendiri (contoh: 10 dibalik menjadi 01 → bukan 10).

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome. 
*/

function isPalindrome(x: number): boolean {
  //jika angka negatif tidak mungkin palindrom
  if (x < 0) return false;

  let reversed = 0;
  let original = x;

  //mengembalikan angka menggunakan operasi matematika
  while (original > 0) {
    //mengambil digit terakhir
    const lastDigit = original % 10;
    //menambahkan digit terakhir ke reserved (dengan posisi yang sesuai)
    reversed = reversed * 10 + lastDigit;
    // mengahapus digit terakhir dari angka nol
    original = Math.floor(original / 10);
  }

  //membandingkan angka asli dengan versi yang sudah dibalik
  return x === reversed;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
console.log(isPalindrome(12321));
