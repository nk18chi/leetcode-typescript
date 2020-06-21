// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;
  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
  return root;
}
