// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring

// use two pointers
// we first find the maxium same letter from the first point to right. caaaad => aaaa
// if neibor letters are the same, the word must be a palindrome like bab => cbabc

// Time complexity: O(N^2)
// Space complexity: O(1)
export function longestPalindrome(s: string): string {
  let res: string = "";
  for (let i = 0; i < s.length; i++) {
    let left: number = i;
    let right: number = i;
    while (right + 1 < s.length) {
      if (s[left] !== s[right + 1]) break;
      right += 1;
    }
    while (left - 1 >= 0 && right + 1 < s.length) {
      if (s[left - 1] !== s[right + 1]) break;
      left -= 1;
      right += 1;
    }
    if (res.length < right - left + 1) res = s.slice(left, right + 1);
  }
  return res;
}
