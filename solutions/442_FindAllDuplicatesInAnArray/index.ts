// 442. Find All Duplicates in an Array
// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// Time complexity: O(n)
// Space complexity: O(n)
export function findDuplicates(nums: number[]): number[] {
  const countMap: { [key: number]: number } = {};
  const res: number[] = [];
  for (const n of nums) {
    countMap[n] = countMap[n] || 0;
    countMap[n]++;
    if (countMap[n] > 1) res.push(n);
  }

  return res;
}
