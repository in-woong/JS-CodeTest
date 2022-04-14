function confirm(y, x, A) {
  const N = A.length;
  const d = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ];
  let result = 0;
  for (let i = 0; i < d.length; i++) {
    const dy = d[i][0] + y;
    const dx = d[i][1] + x;

    if (N > dy && dy >= 0 && N > dx && dx >= 0) {
      if (A[dy][dx]) {
        result++;
      }
    }
  }
  return result;
}

function solution(A) {
  const N = A.length;
  let result = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      result.push(confirm(i, j, A));
      console.log(result);
    }
  }

  return Math.max(...result);
}

const input = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(`${1} ${solution(input)}`);

//test4
