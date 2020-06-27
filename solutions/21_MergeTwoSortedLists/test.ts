import { createListNode } from "../../data_structure/listNode";

import { mergeTwoLists } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  arg2: number[];
  result: number[];
}

describe("#mergeTwoLists", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 4],
      arg2: [1, 3, 4],
      result: [1, 1, 2, 3, 4, 4],
    },
    {
      arg1: [1],
      arg2: [],
      result: [1],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(mergeTwoLists(createListNode(arg1), createListNode(arg2)), createListNode(result));
    });
  }
});
