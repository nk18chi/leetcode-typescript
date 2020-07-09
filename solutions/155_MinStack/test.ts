import { MinStack } from "./index";

const assert = require("assert");

describe("#minStack", () => {
  it(`test1`, () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.strictEqual(minStack.getMin(), -3);
    minStack.pop();
    assert.strictEqual(minStack.top(), 0);
    assert.strictEqual(minStack.getMin(), -2);
  });
});
