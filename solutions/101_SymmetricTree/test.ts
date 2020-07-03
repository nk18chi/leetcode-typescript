import { createTreeNode } from "../../data_structure/treeNode";
import { isSymmetric } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: number[];
  result: Boolean;
}

describe("#isSymmetric", () => {
  const tests: ITestCase[] = [
    {
      arg1: [],
      result: false,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(isSymmetric(createTreeNode(arg1)), result);
    });
  }
});
