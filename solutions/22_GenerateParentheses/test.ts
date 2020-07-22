import { generateParenthesis } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number;
  result: string[];
}

describe("#generateParenthesis", () => {
  const tests: ITestCase[] = [
    {
      arg1: 3,
      result: ["((()))", "(()())", "(())()", "()(())", "()()()"],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(generateParenthesis(arg1), result);
    });
  }
});
