// 463. Island Perimeter
// https://leetcode.com/problems/island-perimeter/

// Time complexity: O(n)
// Space complexity: O(n)
export function islandPerimeter(grid: number[][]): number {
  let total: number = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) {
        continue;
      }
      total += dfs(i, j);
    }
  }
  return total;

  function dfs(row: number, col: number): number {
    if (row < 0 || row >= grid.length) {
      return 1;
    }
    if (col < 0 || col >= grid[row].length) {
      return 1;
    }
    if (grid[row][col] === 0) {
      return 1;
    }
    if (grid[row][col] === 2) {
      return 0;
    }
    grid[row][col] = 2;
    return dfs(row - 1, col) + dfs(row + 1, col) + dfs(row, col - 1) + dfs(row, col + 1);
  }
}
