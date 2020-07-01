import { createTreeNode } from "../../data_structure/treeNode";

import { diameterOfBinaryTree } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#diameterOfBinaryTree", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 3, 4, 5],
      result: 3,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(diameterOfBinaryTree(createTreeNode(arg1)), result);
    });
  }
});
