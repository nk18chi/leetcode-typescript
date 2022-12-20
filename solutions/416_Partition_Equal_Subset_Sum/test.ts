import { canPartition } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: boolean;
}

describe("#canPartition", () => {
  const tests: ITestCase[] = [
    {
      arg1: [1, 5, 11, 5],
      result: true,
    },
    {
      arg1: [1, 2, 3, 5],
      result: false,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(canPartition(arg1), result);
    });
  }
});
