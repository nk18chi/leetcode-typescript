import { isValid } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: string;
  result: boolean;
}

describe("#isValid", () => {
  const tests: ITestCase[] = [
    {
      arg1: "",
      result: true,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(isValid(arg1), result);
    });
  }
});
