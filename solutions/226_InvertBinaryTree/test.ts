import { createTreeNode } from "../../data_structure/treeNode";
import { invertTree } from "./index";

const assert = require("assert");

interface ITestCase {
  arg1: (number | null)[];
  result: (number | null)[];
}

describe("#invertTree", () => {
  const tests: ITestCase[] = [
    {
      arg1: [4, 2, 7, 1, 3, 6, 9],
      result: [4, 7, 2, 9, 6, 3, 1],
    },
  ];
  let i = 0;
  for (let { arg1, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(invertTree(createTreeNode(arg1)), createTreeNode(result));
    });
  }
});
