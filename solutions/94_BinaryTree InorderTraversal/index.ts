// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  dfs(root);
  return res;

  function dfs(root: TreeNode | null) {
    if (root === null) return;
    if (root.left) dfs(root.left);
    res.push(root.val);
    if (root.right) dfs(root.right);
  }
}
