// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

// how to solve
// 1. declare two pointers that are located at zero index
// 2. one pointer(A) move one step until it reaches the end of the array
// 3. another(B) move one step until it reaches the first zero of the element
// 4. if A is located at non-zero element and A is not same as B, switch A and B then both move one
// repeat this operation until A pass the end of the array.

// Time complexity: O(n)
// Space complexity: O(1)
export function moveZeroes(nums: number[]): void {
  let pointer: number = 0;
  for (const [i, n] of nums.entries()) {
    if (n === 0) {
      continue;
    }
    [nums[i], nums[pointer]] = [nums[pointer], nums[i]];
    pointer++;
  }
}
