import { countBits } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: number[];
}

describe("#countBits", () => {
  const tests: ITestCase[] = [
    {
      arg1: 2,
      result: [0, 1, 1],
    },
    {
      arg1: 5,
      result: [0, 1, 1, 2, 1, 2],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(countBits(arg1), result);
    });
  }
});
