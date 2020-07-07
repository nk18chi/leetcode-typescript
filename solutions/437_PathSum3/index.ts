// 437. Path Sum III
// https://leetcode.com/problems/path-sum-iii/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(n^2)
// Space complexity: O(n)
export function pathSum(root: TreeNode | null, sum: number): number {
  let patterns: number = 0;
  helper(root);
  return patterns;

  function helper(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }
    const child: number[] = helper(root.left).concat(helper(root.right));
    for (let i = 0; i < child.length; i++) {
      child[i] += root.val;
      patterns += child[i] === sum ? 1 : 0;
    }
    if (root.val === sum) {
      patterns += 1;
    }
    child.push(root.val);
    return child;
  }
}

// Time complexity: O(n)
// Space complexity: O(n)
export function pathSum2(root: TreeNode | null, sum: number): number {
  let patterns: number = 0;
  const seen: { [key: number]: number } = { 0: 1 };
  dfs(root, sum, 0, seen);
  return patterns;

  function dfs(root: TreeNode | null, sum: number, cur: number, seen: { [key: number]: number }) {
    if (root === null) {
      return;
    }
    cur += root.val;
    patterns += seen[cur - sum] || 0;
    seen[cur] = ++seen[cur] || 1;
    dfs(root.left, sum, cur, seen);
    dfs(root.right, sum, cur, seen);
    seen[cur] -= 1;
  }
}
