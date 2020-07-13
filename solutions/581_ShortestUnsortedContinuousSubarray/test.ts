import { findUnsortedSubarray } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#findUnsortedSubarray", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 6, 4, 8, 10, 9, 15],
      result: 5,
    },
    {
      arg1: [2, 6, 8, 10, 15],
      result: 0,
    },
    {
      arg1: [1, 3, 2, 2, 2],
      result: 4,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(findUnsortedSubarray(arg1), result);
    });
  }
});
