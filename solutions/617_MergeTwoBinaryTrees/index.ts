// 617. Merge Two Binary Trees
// https://leetcode.com/problems/merge-two-binary-trees/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
}
