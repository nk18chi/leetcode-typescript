import { TreeNode, createTreeNode } from "../../data_structure/treeNode";

import { increasingBST } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: TreeNode | null;
  result: TreeNode | null;
}

describe("#increasingBST", () => {
  const tests: ITestCase[] = [
    {
      arg1: createTreeNode([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9]),
      result: createTreeNode([1, null, 2, null, 3, null, 4, null, 5, null, 6, null, 7, null, 8, null, 9]),
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(increasingBST(arg1), result);
    });
  }
});
