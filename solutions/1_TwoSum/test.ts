import { twoSum } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  arg2: number;
  result: number[];
}

describe("#twoSum", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 7, 11, 15],
      arg2: 9,
      result: [0, 1],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(twoSum(arg1, arg2), result);
    });
  }
});
