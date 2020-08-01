import { combinationSum } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  arg2: number;
  result: number[][];
}

describe("#combinationSum", () => {
  const tests: ITestCase[] = [
    {
      arg1: [],
      arg2: 0,
      result: [[]],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(combinationSum(arg1, arg2), result);
    });
  }
});
