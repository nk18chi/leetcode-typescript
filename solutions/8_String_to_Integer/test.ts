// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { myAtoi } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  result: number;
}

describe("#myAtoi", () => {
  const tests: ITestCase[] = [
    {
      arg1: "42",
      result: 42,
    },
    {
      arg1: "   -42",
      result: -42,
    },
    {
      arg1: "4193 with words",
      result: 4193,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(myAtoi(arg1), result);
    });
  }
});
