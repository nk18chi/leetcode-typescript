// 105. Construct Binary Tree from Preorder and Inorder Traversal
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

import { TreeNode } from "../../data_structure/treeNode";

// the first element of preorder array is a root and it divide a left and right node in inorder array.
// proceed this process until an element does not exist in preorder/inorder array

// Time complexity: O(N)
// Space complexity: O(N)
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const n: number | undefined = preorder.shift();
  if (!n) return null;
  const root: TreeNode = new TreeNode(n);
  const index: number = inorder.indexOf(n);
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  return root;
}
