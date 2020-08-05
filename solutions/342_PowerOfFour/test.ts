import { isPowerOfFour } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: boolean;
}

describe("#isPowerOfFour", () => {
  const tests: ITestCase[] = [
    {
      arg1: 16,
      result: true,
    },
    {
      arg1: 8,
      result: false,
    },
    {
      arg1: 1,
      result: true,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(isPowerOfFour(arg1), result);
    });
  }
});
