// 8. String to Integer (atoi)
// https://leetcode.com/problems/string-to-integer-atoi/

// Time complexity: O(N)
// Space complexity: O(1)
export function myAtoi(s: string): number {
  let stringNumber: string = "";
  for (let i = 0; i < s.length; i++) {
    const code: number = s.charCodeAt(i);
    if (code === 43 || code === 45 || (code >= 48 && code <= 57)) {
      if ((code === 43 || code === 45) && stringNumber.length > 0) break;
      stringNumber += s[i];
    } else if (code == 32) {
      if (stringNumber.length > 0) break;
      continue;
    } else break;
  }
  let n: number = Number(stringNumber);
  if (!n) return 0;
  if (n < Math.pow(-2, 31)) n = Math.pow(-2, 31);
  else if (n > Math.pow(2, 31) - 1) n = Math.pow(2, 31) - 1;
  return n;
}
