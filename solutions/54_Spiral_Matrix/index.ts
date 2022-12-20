// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

// Time complexity: O(MN)
// Space complexity: O(MN)
export function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  const directions: any[] = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let pointer: number = 0;
  const visited: Set<string> = new Set();
  function dfs(row: number, col: number) {
    if (row < 0 || row >= matrix.length) return;
    if (col < 0 || col >= matrix[row].length) return;
    if (visited.has(`${row}#${col}`)) return;
    visited.add(`${row}#${col}`);
    res.push(matrix[row][col]);
    for (let i = 0; i < directions.length; i++) {
      const index: number = pointer % directions.length;
      dfs(row + directions[index][0], col + directions[index][1]);
      pointer += 1;
    }
  }
  dfs(0, 0);
  return res;
}
