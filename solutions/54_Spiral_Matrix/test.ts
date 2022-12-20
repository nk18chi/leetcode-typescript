import { spiralOrder } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[][];
  result: number[];
}

describe("#spiralOrder", () => {
  const tests: ITestCase[] = [
    {
      arg1: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      result: [1, 2, 3, 6, 9, 8, 7, 4, 5],
    },
    {
      arg1: [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(spiralOrder(arg1), result);
    });
  }
});
