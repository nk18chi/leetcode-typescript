// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

// Time complexity: O(4^n/root(n))
// Space complexity: O(4^n/root(n))
export function generateParenthesis(n: number): string[] {
  const res: string[] = [];
  backtracking();
  return res;

  function backtracking(s: string = "", left: number = 0, right: number = 0) {
    if (left > n || left < right) {
      return;
    }
    if (s.length === n * 2) {
      res.push(s);
      return;
    }
    backtracking(s + "(", left + 1, right);
    backtracking(s + ")", left, right + 1);
  }
}

// backtracking
// create anothe helper function that allow us to generate parenteses.
// the function get three arguments, the string showing current string, left parentheses count, right ones
// check every patterns but if we find the pattern will be impossible, go back one step and change to anothe approach
// right count shold not be greater than left's count
// left's count should not be greater than n
// if both count's will be zero, store the current string into a result array
// then return the result array
