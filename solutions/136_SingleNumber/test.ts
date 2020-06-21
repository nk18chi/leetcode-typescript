// import { createTreeNode } from "../../data_structure/treeNode";
import { singleNumber } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: number;
}

describe("#singleNumber", () => {
  const tests: ITestCase[] = [
    {
      arg1: [2, 2, 1],
      result: 1,
    },
    {
      arg1: [4, 1, 2, 1, 2],
      result: 4,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(singleNumber(arg1), result);
    });
  }
});
