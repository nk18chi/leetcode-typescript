// 78. Subsets
// https://leetcode.com/problems/subsets/

// Time complexity: O(n * 2^n)
// Space complexity: O(n * 2^n)
export function subsets(nums: number[]): number[][] {
  const res: number[][] = [[]];
  for (const n of nums) {
    const size = res.length;
    for (let i = 0; i < size; i++) {
      res.push([...res[i], n]);
    }
  }
  return res;
}
