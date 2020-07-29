// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/

// Time complexity: O(n*n)
// Space complexity: O(1)
export function rotate(matrix: number[][]): void {
  let tl: number = 0;
  let br: number = matrix.length - 1;
  while (br - tl > 0) {
    for (let i = 0; i < br - tl; i++) {
      [matrix[tl][tl + i], matrix[tl + i][br]] = [matrix[tl + i][br], matrix[tl][tl + i]];
      [matrix[tl][tl + i], matrix[br][br - i]] = [matrix[br][br - i], matrix[tl][tl + i]];
      [matrix[tl][tl + i], matrix[br - i][tl]] = [matrix[br - i][tl], matrix[tl][tl + i]];
    }
    tl++;
    br--;
  }
}
