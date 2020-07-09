// 155. Min Stack
// https://leetcode.com/problems/min-stack/

// Space complexity: O(n)
export class MinStack {
  _stack: number[] = [];
  _min: number[] = [];

  // Time complexity: O(1)
  push(x: number): void {
    this._stack.push(x);
    if (this._min.length === 0 || this._min[this._min.length - 1] >= x) {
      this._min.push(x);
    }
  }

  // Time complexity: O(1)
  pop(): void {
    if (this._stack.length === 0) {
      return;
    }
    const val: number = this._stack.pop()!;
    if (this._min[this._min.length - 1] === val) {
      this._min.pop();
    }
  }

  // Time complexity: O(1)
  top(): number {
    return this._stack[this._stack.length - 1];
  }

  // Time complexity: O(1)
  getMin(): number {
    return this._min[this._min.length - 1];
  }
}
