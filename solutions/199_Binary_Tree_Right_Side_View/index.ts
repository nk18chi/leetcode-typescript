// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/

import { TreeNode } from "../../data_structure/treeNode";

// take a BFS approach.
// store all nodes in the same level to the queue array
// store the value of the first node from right in each level
// proceed this process until you reach the lowest level

// Time complexity: O(N)
// Space complexity: O(N)
export function rightSideView(root: TreeNode | null): number[] {
  const res: number[] = [];
  const queue: (TreeNode | null)[][] = [[root]];
  while (queue[0].length > 0) {
    const nextLevel: (TreeNode | null)[] = [];
    const nodes: (TreeNode | null)[] | undefined = queue.shift();
    if (nodes) {
      let isSet: boolean = false;
      for (const node of nodes) {
        if (!node) continue;
        if (!isSet) {
          res.push(node.val);
          isSet = true;
        }
        nextLevel.push(node.right);
        nextLevel.push(node.left);
      }
    }
    queue.push(nextLevel);
  }
  return res;
}
