// 338. Counting Bits
// https://leetcode.com/problems/counting-bits/

// Time complexity: O(n)
// Space complexity: O(n)
export function countBits(num: number): number[] {
  const dp: number[] = Array(num + 1).fill(0);
  let power: number = 1;
  for (let i = 1; i <= num; i++) {
    if (i === 2 ** (power + 1)) {
      power += 1;
      dp[i] = 1;
      continue;
    }
    dp[i] = dp[i % 2 ** power] + 1;
  }
  return dp;
}
