/* Problem : Algorithms
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21

*/

function reverse(x: number): number {
  const isNegative = x < 0;
  let num = Math.abs(x);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    // Check for overflow
    if (reversed > (0x7fffffff - digit) / 10) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return isNegative ? -reversed : reversed;
}

// Examples
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
