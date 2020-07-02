// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

// Time complexity: O(n)
// Space complexity: O(1)
export function climbStairs(n: number): number {
  if (n === 1) return 1;
  let [first, second]: number[] = [1, 2];
  for (let _ = 3; _ <= n; _++) {
    [first, second] = [second, first + second];
  }
  return second;
}
