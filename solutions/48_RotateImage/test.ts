// import { createTreeNode } from "../../data_structure/treeNode";
// import { createListNode } from "../../data_structure/listNode";

import { rotate } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[][];
  result: number[][];
}

describe("#rotate", () => {
  const tests: ITestCase[] = [
    {
      arg1: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      result: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ],
    },
    {
      arg1: [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16],
      ],
      result: [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      rotate(arg1);
      assert.deepStrictEqual(arg1, result);
    });
  }
});
