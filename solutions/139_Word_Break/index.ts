// 139. Word Break
// https://leetcode.com/problems/word-break/

// Time complexity: O(NM^M)
// Space complexity: O(N)
export function wordBreak(s: string, wordDict: string[]): boolean {
  const dp: boolean[] = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (const word of wordDict) {
      if (i < word.length) continue;
      if (dp[i - word.length] && word === s.slice(i - word.length, i)) {
        dp[i] = true;
      }
    }
  }
  return dp[s.length];
}
