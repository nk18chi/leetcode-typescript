// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

// Time complexity: O(n^2)
// Space complexity: O(1)
export function countSubstrings(s: string): number {
  let res: number = 0;
  const size: number = s.length;
  for (let i = 0; i < 2 * size - 1; i++) {
    let left: number = Math.floor(i / 2);
    let right: number = left + (i % 2);
    while (left >= 0 && right < size && s[left] === s[right]) {
      res++;
      left--;
      right++;
    }
  }

  return res;
}
