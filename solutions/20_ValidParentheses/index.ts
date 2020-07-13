// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// Time complexity: O(n)
// Space complexity: O(n)
export function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairMap: { [key: string]: string } = { ")": "(", "}": "{", "]": "[" };
  for (const c of s) {
    if (!pairMap[c]) {
      stack.push(c);
      continue;
    }
    if (pairMap[c] !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
}

// declare an array that we can use as stack
// also create the hashmap that open pairs between the open brancket and the close brancket are stored, key is close branckets
// we traverse every element and check if the string is open or close by using the hashmap
// if the string is open, store it into the stack array.
// if not, get the last element of the stack array and check the taken value is open branckets of the pairs.
// if so, conitinue this operation. otherwise, stop and return false
// if we finish traversing elements, check if the stack array has some values. if not, return true
