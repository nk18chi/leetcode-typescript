// 169. Majority Element
// https://leetcode.com/problems/majority-element/

// Time complexity: O(n)
// Space complexity: O(n)
export function majorityElement(nums: number[]): number {
  const map: { [key: number]: number } = {};
  for (const n of nums) {
    map[n] = ++map[n] || 1;
    if (map[n] > nums.length / 2) {
      return n;
    }
  }
  return -1;
}

export function majorityElement2(nums: number[]): number {
  let count: number = 0;
  let current: number | null = null;
  for (const n of nums) {
    if (count === 0) {
      current = n;
    }
    count += n === current ? 1 : -1;
  }
  return current!;
}
