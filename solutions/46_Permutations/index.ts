// 46. Permutations
// https://leetcode.com/problems/permutations/

// Time complexity: O(n!)
// Space complexity: O(n!)
export function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  dfs([], nums);
  return res;

  function dfs(cur: number[], rest: number[]) {
    if (rest.length === 0) {
      res.push([...cur]);
      return;
    }
    for (const [i, n] of rest.entries()) {
      cur.push(n);
      let newRest = [...rest];
      newRest.splice(i, 1);
      dfs(cur, newRest);
      cur.pop();
    }
  }
}
