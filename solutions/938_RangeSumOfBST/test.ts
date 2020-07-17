import { TreeNode, createTreeNode } from "../../data_structure/treeNode";

import { rangeSumBST } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: TreeNode | null;
  arg2: number;
  arg3: number;
  result: number;
}

describe("#rangeSumBST", () => {
  const tests: ITestCase[] = [
    {
      arg1: createTreeNode([10, 5, 15, 3, 7, null, 18]),
      arg2: 7,
      arg3: 15,
      result: 32,
    },
  ];
  let i = 0;
  for (let { arg1, arg2, arg3, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(rangeSumBST(arg1, arg2, arg3), result);
    });
  }
});
