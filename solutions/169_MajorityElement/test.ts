import { majorityElement, majorityElement2 } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#majorityElement", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 2, 1, 1, 1, 2, 2],
      result: 2,
    },
    {
      arg1: [1, 2, 3, 4, 4, 4, 4],
      result: 4,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(majorityElement(arg1), result);
    });
  }
});

describe("#majorityElement", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 2, 1, 1, 1, 2, 2],
      result: 2,
    },
    {
      arg1: [1, 2, 3, 4, 4, 4, 4],
      result: 4,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(majorityElement2(arg1), result);
    });
  }
});
