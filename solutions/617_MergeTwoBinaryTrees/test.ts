import { createTreeNode } from "../../data_structure/treeNode";
import { mergeTrees } from "./index";

const assert = require("assert");

interface ITestCase {
  t1: (number | null)[];
  t2: (number | null)[];
  result: (number | null)[];
}

describe("#mergeTrees", () => {
  const tests: ITestCase[] = [
    {
      t1: [1, 3, 2, 5],
      t2: [2, 1, 3, null, 4, null, 7],
      result: [3, 4, 5, 5, 4, null, 7],
    },
  ];
  let i = 0;
  for (let { t1, t2, result } of tests) {
    it(`test${i++}`, () => {
      assert.deepStrictEqual(mergeTrees(createTreeNode(t1), createTreeNode(t2)), createTreeNode(result));
    });
  }
});
