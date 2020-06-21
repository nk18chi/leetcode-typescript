// 136. Single Number
// https://leetcode.com/problems/single-number/

// import { TreeNode } from "../../data_structure/treeNode";

// what is the problem like?
// find an unduplicated number from the given array
// the anser is guaranteed

// how to solve
// bit manipulation(xor) works well if time should be O(n) and space should be O(1)
// xor is a operator function that if the compared values are different return 0. if they are same number return 1
// example
// nums = [4,3,4]
// the number should be converted into binary
// 0 ^ 4 = 4
// 0 -> 000
// 4 -> 100
// xor  100 -> 4
// 4 ^ 3 = 7
// 4 -> 100
// 3 -> 011
// xor  111 -> 7
// 7 ^ 4 = 3
// 7 -> 111
// 4 -> 100
// xor  011 -> 3
// return 3

// Time complexity: O(n)
// Space complexity: O(1)
export function singleNumber(nums: number[]): number {
  let res: number = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];
  }
  return res;
}
