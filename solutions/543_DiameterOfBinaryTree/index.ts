// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

import { TreeNode } from "../../data_structure/treeNode";

// Time O (n) Space O(n)
// declare max value, initial value is zero
// go down the deepest node (leaf node) by DFS
// if child is None, return 0
// parent get max values from both children
// check added both values is graeter than the current max value or not. If so, update the value
// then pass the bigger value added one to the parent
// continue this operation untill we traverse every node
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxValue: number = 0;
  dfs(root);
  return maxValue;

  function dfs(root: TreeNode | null): number {
    if (root === null) return 0;
    const left: number = dfs(root.left);
    const right: number = dfs(root.right);
    maxValue = Math.max(maxValue, left + right);
    return Math.max(left, right) + 1;
  }
}
