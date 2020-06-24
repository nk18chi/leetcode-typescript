// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { moveZeroes } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[];
}

describe("#moveZeroes", () => {
  const tests: ITestCase[] = [
    {
      arg1: [0, 1, 0, 3, 12],
      result: [1, 3, 12, 0, 0],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      moveZeroes(arg1);
      assert.deepStrictEqual(arg1, result);
    });
  }
});
