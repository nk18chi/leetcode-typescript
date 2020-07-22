// 95. Unique Binary Search Trees II
// https://leetcode.com/problems/unique-binary-search-trees-ii/

import { TreeNode } from "../../data_structure/treeNode";

// Time complexity: O(4^n?)
// Space complexity: O(4^n?)
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return [];
  return dfs(1, n + 1);

  function dfs(start: number, end: number): Array<TreeNode | null> {
    if (start === end) return [null];
    const res: Array<TreeNode | null> = [];
    for (let i = start; i < end; i++) {
      for (const l of dfs(start, i)) {
        for (const r of dfs(i + 1, end)) {
          const node: TreeNode | null = new TreeNode(i);
          node.left = l;
          node.right = r;
          res.push(node);
        }
      }
    }
    return res;
  }
}
