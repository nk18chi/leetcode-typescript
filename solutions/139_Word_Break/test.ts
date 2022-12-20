// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { func } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: number;
}

describe("#func", () => {
  const tests: ITestCase[] = [
    {
      arg1: 0,
      result: 0,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(func(arg1), result);
    });
  }
});
