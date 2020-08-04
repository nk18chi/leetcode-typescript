import { isPalindrome } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  result: boolean;
}

describe("#isPalindrome", () => {
  const tests: ITestCase[] = [
    {
      arg1: "A man, a plan, a canal: Panama",
      result: true,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(isPalindrome(arg1), result);
    });
  }
});
