import { rob } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#rob", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 3, 1],
      result: 4,
    },
    {
      arg1: [2, 7, 9, 3, 1],
      result: 12,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(rob(arg1), result);
    });
  }
});
