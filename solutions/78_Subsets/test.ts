import { subsets } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number[][];
}

describe("#subsets", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 2, 3],
      result: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(subsets(arg1), result);
    });
  }
});
