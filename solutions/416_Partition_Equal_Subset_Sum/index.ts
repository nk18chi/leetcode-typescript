// 416. Partition Equal Subset Sum
// https://leetcode.com/problems/partition-equal-subset-sum/

// Time complexity: O(N * Sum(N) / 2)
// Space complexity: O(Sum(N) / 2)
export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((a, b) => a + b, 0);
  if (sum % 2 === 1) return false;
  const dp: boolean[] = new Array(sum / 2 + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let i = sum / 2; i >= num; i--) {
      if (!dp[i - num]) continue;
      dp[i] = true;
    }
  }
  return dp[sum / 2];
}
