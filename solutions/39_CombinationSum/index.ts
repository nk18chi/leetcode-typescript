// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/

// Time complexity: O(2^n)
// Space complexity: O(2^n)
export function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  dfs(candidates, [], target);
  return res;

  function dfs(candidates: number[], cur: number[], target: number) {
    if (target < 0) return;
    if (target === 0) {
      res.push(cur);
      return;
    }
    const size: number = candidates.length;
    for (let i = 0; i < candidates.length; i++) {
      const n: number = candidates[i];
      dfs(candidates.slice(i, size), [...cur].concat(n), target - n);
    }
  }
}
