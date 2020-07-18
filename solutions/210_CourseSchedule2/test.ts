import { findOrder } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  arg2: number[][];
  result: number[];
}

describe("#findOrder", () => {
  const tests: ITestCase[] = [
    {
      arg1: 4,
      arg2: [
        [1, 0],
        [2, 0],
        [3, 1],
        [3, 2],
      ],
      result: [0, 1, 2, 3],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(findOrder(arg1, arg2), result);
    });
  }
});
