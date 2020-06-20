export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createTreeNode(arr: (number | null)[]): TreeNode | null {
  const l = arr.length;
  if (l === 0 || arr[0] === null) return null;

  let i: number = 0;
  const root: TreeNode = new TreeNode(arr[i++]!);
  insert([root]);
  return root;

  function insert(parents: TreeNode[]): void {
    if (i >= l) return;
    const children = [];
    for (let parent of parents) {
      const left: number | null | undefined = arr[i++];
      const right: number | null | undefined = arr[i++];
      if (left !== null && left !== undefined) {
        const node = new TreeNode(left);
        parent.left = node;
        children.push(node);
      }
      if (right !== null && right !== undefined) {
        const node = new TreeNode(right);
        parent.right = node;
        children.push(node);
      }
    }
    insert(children);
  }
}
