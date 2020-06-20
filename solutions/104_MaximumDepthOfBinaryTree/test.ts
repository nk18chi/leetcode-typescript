import { createTreeNode } from "../../data_structure/treeNode";
import { maxDepth } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: (number | null)[];
  result: number;
}

describe("#maxDepth", () => {
  const tests: ITestCase[] = [
    {
      arg1: [3, 9, 20, null, null, 15, 7],
      result: 3,
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(maxDepth(createTreeNode(arg1)), result);
    });
  }
});
