// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

// Time complexity: O(n)
// Space complexity: O(1)
export function maxSubArray(nums: number[]): number {
  let curMax: number = 0;
  let totalMax: number = -Infinity;
  for (const n of nums) {
    curMax = Math.max(curMax + n, n);
    totalMax = Math.max(totalMax, curMax);
  }
  return totalMax;
}

// declare two variables, totalMax and curMax
// we traverse elements from fisrt to end
// check which numbet is graeter, curMax + curVal or curCal
// store the bigger number into curMax
// update totalMax if curMax is grater than totalMax
// lastly, return total max
