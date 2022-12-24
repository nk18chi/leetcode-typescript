// 62. Unique Paths
// https://leetcode.com/problems/unique-paths

// Time complexity: O(MN)
// Space complexity: O(MN)
export function uniquePaths(m: number, n: number): number {
  const dp: number[][] = Array.from(new Array(m), () => new Array(n).fill(null));
  dp[m - 1][n - 1] = 1;
  function dfs(row: number, col: number): number {
    if (row < 0 || row >= m) return 0;
    if (col < 0 || col >= n) return 0;
    if (dp[row][col]) return dp[row][col];
    dp[row][col] = dfs(row + 1, col) + dfs(row, col + 1);
    return dp[row][col];
  }
  return dfs(0, 0);
}
