import { floodFill } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[][];
  arg2: number;
  arg3: number;
  arg4: number;
  result: number[][];
}

describe("#floodFill", () => {
  const tests: ITestCase[] = [
    {
      arg1: [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      arg2: 1,
      arg3: 1,
      arg4: 2,
      result: [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    },
    {
      arg1: [
        [0, 0, 0],
        [0, 0, 0],
      ],
      arg2: 0,
      arg3: 0,
      arg4: 0,
      result: [
        [0, 0, 0],
        [0, 0, 0],
      ],
    },
  ];
  let i = 0;
  for (let { arg1, arg2, arg3, arg4, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(floodFill(arg1, arg2, arg3, arg4), result);
    });
  }
});
