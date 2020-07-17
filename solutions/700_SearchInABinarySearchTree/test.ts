import { TreeNode, createTreeNode } from "../../data_structure/treeNode";

import { searchBST } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: TreeNode | null;
  arg2: number;
  result: TreeNode | null;
}

describe("#searchBST", () => {
  const tests: ITestCase[] = [
    {
      arg1: createTreeNode([4, 2, 7, 1, 3]),
      arg2: 2,
      result: createTreeNode([2, 1, 3]),
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(searchBST(arg1, arg2), result);
    });
  }
});
