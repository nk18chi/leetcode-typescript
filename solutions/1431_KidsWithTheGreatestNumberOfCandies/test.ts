// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { kidsWithCandies } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  arg2: number;
  result: boolean[];
}

describe("#fkidsWithCandiesunc", () => {
  const tests: ITestCase[] = [
    {
      arg1: [0],
      arg2: 0,
      result: [true],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(kidsWithCandies(arg1, arg2), result);
    });
  }
});
