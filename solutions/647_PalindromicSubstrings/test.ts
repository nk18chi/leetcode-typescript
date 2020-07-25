import { countSubstrings } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  result: number;
}

describe("#countSubstrings", () => {
  const tests: ITestCase[] = [
    {
      arg1: "abc",
      result: 3,
    },
    {
      arg1: "aaa",
      result: 6,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(countSubstrings(arg1), result);
    });
  }
});
