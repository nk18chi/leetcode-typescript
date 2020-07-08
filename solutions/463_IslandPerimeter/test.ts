import { islandPerimeter } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[][];
  result: number;
}

describe("#islandPerimeter", () => {
  const tests: ITestCase[] = [
    {
      arg1: [[]],
      result: 0,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(islandPerimeter(arg1), result);
    });
  }
});
