// 137. Single Number II
// https://leetcode.com/problems/single-number-ii/

// Time complexity: O(n)
// Space complexity: O(1)
export function singleNumber(nums: number[]): number {
  let a: number = 0;
  let b: number = 0;
  for (const n of nums) {
    a = a ^ (n & ~b);
    b = b ^ (n & ~a);
  }
  return a;
}
