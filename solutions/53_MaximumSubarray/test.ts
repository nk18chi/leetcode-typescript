import { maxSubArray } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#maxSubArray", () => {
  const tests: ITestCase[] = [
    {
      arg1: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      result: 6,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(maxSubArray(arg1), result);
    });
  }
});
