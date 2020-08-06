import { findDuplicates } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[];
}

describe("#findDuplicates", () => {
  const tests: ITestCase[] = [
    {
      arg1: [4, 3, 2, 7, 8, 2, 3, 1],
      result: [2, 3],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(findDuplicates(arg1), result);
    });
  }
});
