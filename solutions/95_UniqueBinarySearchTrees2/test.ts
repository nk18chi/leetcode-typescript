import { TreeNode, createTreeNode } from "../../data_structure/treeNode";

import { generateTrees } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: Array<TreeNode | null>;
}

describe("#generateTrees", () => {
  const tests: ITestCase[] = [
    {
      arg1: 3,
      result: [
        createTreeNode([1, null, 2, null, 3]),
        createTreeNode([1, null, 3, 2]),
        createTreeNode([2, 1, 3]),
        createTreeNode([3, 1, null, null, 2]),
        createTreeNode([3, 2, null, 1]),
      ],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(generateTrees(arg1), result);
    });
  }
});
