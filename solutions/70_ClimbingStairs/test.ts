import { climbStairs } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: number;
}

describe("#climbStairs", () => {
  const tests: ITestCase[] = [
    {
      arg1: 2,
      result: 2,
    },

    {
      arg1: 5,
      result: 8,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(climbStairs(arg1), result);
    });
  }
});
