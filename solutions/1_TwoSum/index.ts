// 1. Two Sum
// https://leetcode.com/problems/two-sum/

// Time complexity: O(n)
// Space complexity: O(n)
export function twoSum(nums: number[], target: number): number[] {
  const indexMap: Map<number, number> = new Map();
  for (const [i, n] of nums.entries()) {
    const diffIndex: number | undefined = indexMap.get(target - n);
    if (diffIndex !== undefined) {
      return [diffIndex, i];
    }
    indexMap.set(n, i);
  }
  return [];
}
