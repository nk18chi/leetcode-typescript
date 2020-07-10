// 198. House Robber
// https://leetcode.com/problems/house-robber/

// Time complexity: O(n)
// Space complexity: O(1)
export function rob(nums: number[]): number {
  let dp: number[] = [0, 0];
  for (let i = 0; i < nums.length; i++) {
    [dp[0], dp[1]] = [dp[1], Math.max(dp[1], dp[0] + nums[i])];
  }
  return dp[1];
}

// DP problem
// we traverse every element and check if which value is greater, current val + two previous val or one previous val
// store the biggerr one as previou number
// proceed this operation until checking every element
// return the lastest value we stored
