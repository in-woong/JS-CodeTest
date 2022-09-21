/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let answer = 0;
  const n = mat.length;
  for (let i = 0; i < n; i++) {
    answer += mat[i][i];
    answer += mat[n - 1 - i][i];
  }
  if (n % 2) {
    const num = Math.floor(n / 2);
    answer -= mat[num][num];
  }
  return answer;
};
