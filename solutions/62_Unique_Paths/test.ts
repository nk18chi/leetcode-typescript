import { uniquePaths } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  arg2: number;
  result: number;
}

describe("#uniquePaths", () => {
  const tests: ITestCase[] = [
    {
      arg1: 3,
      arg2: 7,
      result: 28,
    },
    {
      arg1: 3,
      arg2: 2,
      result: 3,
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(uniquePaths(arg1, arg2), result);
    });
  }
});
