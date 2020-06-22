import { createListNode } from "../../data_structure/listNode";
import { reverseList, reverseList2 } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[];
}

describe("#reverseList", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 3, 4, 5],
      result: [5, 4, 3, 2, 1],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(reverseList(createListNode(arg1)), createListNode(result));
    });
  }
});

describe("#reverseList2", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 3, 4, 5],
      result: [5, 4, 3, 2, 1],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(reverseList2(createListNode(arg1)), createListNode(result));
    });
  }
});
