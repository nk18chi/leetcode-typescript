import { findDuplicate } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#findDuplicate", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 3, 4, 2, 2],
      result: 2,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(findDuplicate(arg1), result);
    });
  }
});
