import { createTreeNode, TreeNode } from "../../data_structure/treeNode";

import { rightSideView } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: TreeNode | null;
  result: number[];
}

describe("#rightSideView", () => {
  const tests: ITestCase[] = [
    {
      arg1: createTreeNode([1, 2, 3, null, 5, null, 4]),
      result: [1, 3, 4],
    },
    {
      arg1: createTreeNode([1, null, 3]),
      result: [1, 3],
    },
    {
      arg1: createTreeNode([]),
      result: [],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(rightSideView(arg1), result);
    });
  }
});
