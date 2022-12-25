// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/

// Time complexity: O(MN)
// Space complexity: O(1)
export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const n: number = image[sr][sc];
  function dfs(row: number, col: number): void {
    if (row < 0 || row >= image.length) return;
    if (col < 0 || col >= image[row].length) return;
    if (image[row][col] !== n) return;
    image[row][col] = color;
    dfs(row - 1, col);
    dfs(row + 1, col);
    dfs(row, col - 1);
    dfs(row, col + 1);
  }
  if (image[sr][sc] !== color) dfs(sr, sc);
  return image;
}
