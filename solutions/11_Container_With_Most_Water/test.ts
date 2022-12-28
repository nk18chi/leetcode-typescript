import { maxArea } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#maxArea", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      result: 49,
    },
    {
      arg1: [1, 1],
      result: 1,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(maxArea(arg1), result);
    });
  }
});
