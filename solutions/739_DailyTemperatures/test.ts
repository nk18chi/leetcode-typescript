// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { dailyTemperatures } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[];
}

describe("#dailyTemperatures", () => {
  const tests: ITestCase[] = [
    {
      arg1: [73, 74, 75, 71, 69, 72, 76, 73],
      result: [1, 1, 4, 2, 1, 1, 0, 0],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(dailyTemperatures(arg1), result);
    });
  }
});
