/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const rowLen = matrix.length;
  const columnLen = matrix[0].length;
  const temp = Array.from({ length: columnLen }, () =>
    new Array(rowLen).fill(0)
  );

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < columnLen; j++) {
      temp[j][i] = matrix[i][j];
    }
  }
  return temp;
};
