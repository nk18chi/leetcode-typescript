// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import { TreeNode } from "../../data_structure/treeNode";

// This problem is DFS / BFS question
// I prefer to use DFS because usually the amount of code by DFS is less than BFS.

// how to solve
// we go to the deepest depth of node (prefer to go a left node first)
// then return 0 if node is leaf.
// parent get the both of return value from children. and then return the max value added one to the parent(ancestor).
// repeat this operation until the call stack is gone.

// Time complexity: O(n)
// Space complexity: O(n) because the call stack is accumulated
export function maxDepth(root: TreeNode | null): number {
  return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
