/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

class NumMatrix {
  constructor(matrix) {
    if (matrix == null || matrix.length === 0 || matrix[0].length === 0) return;

    const h = matrix.length;
    const w = matrix[0].length;

    const dp = [];
    for (let i = 0; i <= h; i++) {
      const r = [];
      for (let j = 0; j <= w; j++) r.push(null);
      dp.push(r);
    }

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        dp[i + 1][j + 1] =
          dp[i + 1][j] + dp[i][j + 1] + matrix[i][j] - dp[i][j];
      }
    }

    this.dp = dp;
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.dp[row2 + 1][col2 + 1] -
      this.dp[row1][col2 + 1] -
      this.dp[row2 + 1][col1] +
      this.dp[row1][col1]
    );
  }
}
