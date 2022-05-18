function solution(A) {
  const mine = 7;
  const N = A.length;
  const M = A[0].length;

  let maxMine = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (A[i][j] == 1) {
        continue;
      }

      let y1 = i - 1;
      let y2 = i + 1;
      let x1 = j - 1;
      let x2 = j + 1;

      if (x1 < 0) x1 = 0;
      if (x2 >= N) x2 = N - 1;
      if (y1 < 0) y1 = 0;
      if (y2 >= M) y2 = M - 1;

      var mineMap = 0;

      for (let k = y1; k <= y2; k++) {
        for (let t = x1; t <= x2; t++) {
          const temp = (A[k][t] & mine).toString(2);
          console.log(A[k][t], A[k][t] & mine, temp);
          mineMap += temp == 0 ? 0 : temp.match(/1/gi).length;
        }
      }
      if (maxMine < mineMap) maxMine = mineMap;
    }
  }

  return maxMine;
}

const input = [
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
];
console.log(`${1} ${solution(input)}`);
