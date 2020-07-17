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
      arg1: [],
      result: [],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(dailyTemperatures(arg1), result);
    });
  }
});
