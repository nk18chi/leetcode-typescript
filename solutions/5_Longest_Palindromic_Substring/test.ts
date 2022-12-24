import { longestPalindrome } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  result: string;
}

describe("#longestPalindrome", () => {
  const tests: ITestCase[] = [
    {
      arg1: "babad",
      result: "bab",
    },
    {
      arg1: "cbbd",
      result: "bb",
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(longestPalindrome(arg1), result);
    });
  }
});
