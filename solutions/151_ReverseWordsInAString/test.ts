import { reconstructQueue } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[][];
  result: number[][];
}

describe("#reconstructQueue", () => {
  const tests: ITestCase[] = [
    {
      arg1: [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ],
      result: [
        [5, 0],
        [7, 0],
        [5, 2],
        [6, 1],
        [4, 4],
        [7, 1],
      ],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(reconstructQueue(arg1), result);
    });
  }
});
