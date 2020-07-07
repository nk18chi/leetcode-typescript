import { createTreeNode } from "../../data_structure/treeNode";

import { pathSum } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: (number | null)[];
  arg2: number;
  result: number;
}

describe("#pathSum", () => {
  const tests: ITestCase[] = [
    {
      arg1: [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1],
      arg2: 8,
      result: 3,
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(pathSum(createTreeNode(arg1), arg2), result);
    });
  }
});
