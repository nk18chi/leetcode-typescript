import { createTreeNode, TreeNode } from "../../data_structure/treeNode";

import { inorderTraversal } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: TreeNode | null;
  result: number[];
}

describe("#inorderTraversal", () => {
  const tests: ITestCase[] = [
    {
      arg1: createTreeNode([1, null, 2, 3]),
      result: [1, 3, 2],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(inorderTraversal(arg1), result);
    });
  }
});
