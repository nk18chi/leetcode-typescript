import { wordBreak } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  arg2: string[];
  result: boolean;
}

describe("#wordBreak", () => {
  const tests: ITestCase[] = [
    {
      arg1: "leetcode",
      arg2: ["leet", "code"],
      result: true,
    },
    {
      arg1: "applepenapple",
      arg2: ["apple", "pen"],
      result: true,
    },
    {
      arg1: "catsandog",
      arg2: ["cats", "dog", "sand", "and", "cat"],
      result: false,
    },
  ];
  let i = 0;
  for (let { arg1, arg2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(wordBreak(arg1, arg2), result);
    });
  }
});
