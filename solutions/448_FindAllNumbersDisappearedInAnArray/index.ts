// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// what the question is like
// [4,3,2,7,8,2,3,1] length = 8(n)
// the number in the array should be included from 1 to 8(n) but some number might be missing.
// then find the missing number [5,6]
// the number can appear once or twice or zero

// how to solve
// Time O(n), Space O(1)
// the input array should be re-used
// I visit the every element's number as an index number and change the value to negative to represent the sign I visited
// if it's already negative, doesn't change anything
// Lastly, I just return the indices of the element that is still positive.
// [4,3,2,7,8,2,3,1]
// [-4,-3,-2,-7,8,2,-3,-1]
// [5,6]

// Time complexity: O(n)
// Space complexity: O(1)
export function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    const index = nums[i] < 0 ? nums[i] * -1 - 1 : nums[i] - 1;
    if (nums[index] < 0) {
      continue;
    }
    nums[index] *= -1;
  }
  const res: number[] = [];
  for (const [i, n] of nums.entries()) {
    if (n < 0) {
      continue;
    }
    res.push(i + 1);
  }
  return res;
}
