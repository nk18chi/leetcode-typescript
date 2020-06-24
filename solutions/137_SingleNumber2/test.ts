import { singleNumber } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#singleNumber", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 2, 3, 2],
      result: 3,
    },
    {
      arg1: [0, 1, 0, 1, 0, 1, 99],
      result: 99,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(singleNumber(arg1), result);
    });
  }
});
