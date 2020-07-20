import { ListNode, createListNode } from "../../data_structure/listNode";

import { removeElements } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: ListNode | null;
  arg2: number;
  result: ListNode | null;
}

describe("#removeElements", () => {
  const tests: ITestCase[] = [
    {
      arg1: createListNode([1, 2, 6, 3, 4, 5, 6]),
      arg2: 6,
      result: createListNode([1, 2, 3, 4, 5]),
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(removeElements(arg1, arg2), result);
    });
  }
});
