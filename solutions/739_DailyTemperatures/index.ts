// 739. Daily Temperatures
// https://leetcode.com/problems/daily-temperatures/

// Time complexity: O(n)
// Space complexity: O(w)
export function dailyTemperatures(T: number[]): number[] {
  const stack: number[] = [];
  const res: number[] = Array(T.length).fill(0);
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length > 0) {
      if (T[stack[stack.length - 1]] > T[i]) break;
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return res;
}
