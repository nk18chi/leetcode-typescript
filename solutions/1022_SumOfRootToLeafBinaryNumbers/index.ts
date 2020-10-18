// 1022. Sum of Root To Leaf Binary Numbers
// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function sumRootToLeaf(root: TreeNode | null): number {
  let res: number = 0;
  function dfs(root: TreeNode | null, arr: number[]) {
    if (!root) return;
    arr.push(root.val);
    if (!root.left && !root.right) {
      res += parseInt(arr.map((i) => String(i)).join(""), 2); // res = 4
    }
    dfs(root.left, arr);
    dfs(root.right, arr);
    arr.pop();
  }
  dfs(root, []);
  return res;
}
