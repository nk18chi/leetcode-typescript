// 938. Range Sum of BST
// https://leetcode.com/problems/range-sum-of-bst/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n)
// Space complexity: O(h) h is the hight of the tree.
export function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  let sum = 0;
  dfs(root);
  return sum;
  function dfs(root: TreeNode | null) {
    if (root === null) return;
    if (root.val >= L && root.val <= R) {
      sum += root.val;
      dfs(root.left);
      dfs(root.right);
    } else if (root.val < L) {
      dfs(root.right);
    } else if (root.val > R) {
      dfs(root.left);
    }
  }
}

// three patterns
// declare sum variable
// check of the value is between L and R, or grater or smaller
// if the value is inside the range, add the value to the sum array then go down left and right side
// if the value is grater than R, go down left side
// if the value is smaller than L, go down right side
