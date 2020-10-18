import { createTreeNode } from "../../data_structure/treeNode";

import { sumRootToLeaf } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#sumRootToLeaf", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 0, 1, 0, 1, 0, 1],
      result: 22,
    },
    {
      arg1: [0],
      result: 0,
    },
    {
      arg1: [1],
      result: 1,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(sumRootToLeaf(createTreeNode(arg1)), result);
    });
  }
});
