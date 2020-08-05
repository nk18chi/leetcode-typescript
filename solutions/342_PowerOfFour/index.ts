// 342. Power of Four
// https://leetcode.com/problems/power-of-four/

// Time complexity: O(1)
// Space complexity: O(1)
export function isPowerOfFour(num: number): boolean {
  const size: number = num.toString(2).length;
  return num > 0 && (num & (num - 1)) === 0 && size % 2 === 1;
}
