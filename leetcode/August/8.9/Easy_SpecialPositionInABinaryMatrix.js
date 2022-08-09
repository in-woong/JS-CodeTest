/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  let answer = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1 && count(i, j)) answer++;
    }
  }
  function count(y, x) {
    for (let i = 0; i < n; i++) {
      if (i !== x && mat[y][i] == 1) return false;
    }
    for (let i = 0; i < m; i++) {
      if (i !== y && mat[i][x] == 1) return false;
    }
    return true;
  }
  return answer;
};
