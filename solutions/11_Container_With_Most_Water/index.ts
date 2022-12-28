// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water

// Time complexity: O(N)
// Space complexity: O(1)
export function maxArea(height: number[]): number {
  let res: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;
  while (left < right) {
    res = Math.max(res, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) left += 1;
    else right -= 1;
  }
  return res;
}
