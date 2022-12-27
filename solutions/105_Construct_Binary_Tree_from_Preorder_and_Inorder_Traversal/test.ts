import { TreeNode, createTreeNode } from "../../data_structure/treeNode";

import { buildTree } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  arg2: number[];
  result: TreeNode | null;
}

describe("#buildTree", () => {
  const tests: ITestCase[] = [
    {
      arg1: [3, 9, 20, 15, 7],
      arg2: [9, 3, 15, 20, 7],
      result: createTreeNode([3, 9, 20, null, null, 15, 7]),
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(buildTree(arg1, arg2), result);
    });
  }
});
