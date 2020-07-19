// 897. Increasing Order Search Tree
// https://leetcode.com/problems/increasing-order-search-tree/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O()
// Space complexity: O()
export function increasingBST(root: TreeNode | null): TreeNode | null {
  const res: TreeNode = new TreeNode(0);
  let head: TreeNode = res;
  dfs(root);
  return res.right;

  function dfs(root: TreeNode | null) {
    if (root === null) return;
    dfs(root.left);
    head.right = new TreeNode(root.val);
    head = head.right;
    dfs(root.right);
  }
}
