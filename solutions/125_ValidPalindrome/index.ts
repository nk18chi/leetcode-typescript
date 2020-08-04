// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

// Time complexity: O(n)
// Space complexity: O(1)
export function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let left: number = 0;
  let right: number = s.length - 1;
  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
      continue;
    }
    return false;
  }

  return true;
}
