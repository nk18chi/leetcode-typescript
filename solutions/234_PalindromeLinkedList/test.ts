import { createListNode } from "../../data_structure/listNode";

import { isPalindrome } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: boolean;
}

describe("#isPalindrome", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2],
      result: false,
    },
    {
      arg1: [1, 2, 2, 1],
      result: true,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(isPalindrome(createListNode(arg1)), result);
    });
  }
});
