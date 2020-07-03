// 101. Symmetric Tree
// https://leetcode.com/problems/symmetric-tree/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(n)
export function isSymmetric(root: TreeNode | null): boolean {
  return helper(root, root);
  function helper(lt: TreeNode | null, rt: TreeNode | null): boolean {
    if (lt === null && rt === null) return true;
    if (lt === null || rt === null) return false;
    if (lt.val !== rt.val) return false;
    return helper(lt.left, rt.right) && helper(lt.right, rt.left);
  }
}

// solved by using two DFS
// one is prior left side and another one is right side.
// check if nodes we visit by the both search ways are same or not
