import { maxProfit } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#maxProfit", () => {
  const tests: ITestCase[] = [
    {
      arg1: [7, 1, 5, 3, 6, 4],
      result: 5,
    },
    {
      arg1: [7, 6, 4, 3, 1],
      result: 0,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(maxProfit(arg1), result);
    });
  }
});
