import { findDisappearedNumbers } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[];
}

describe("#findDisappearedNumbers", () => {
  const tests: ITestCase[] = [
    {
      arg1: [4, 3, 2, 7, 8, 2, 3, 1],
      result: [5, 6],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(findDisappearedNumbers(arg1), result);
    });
  }
});
