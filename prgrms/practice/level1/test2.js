function cmp(a, b) {
  return a - b;
}

function solution(A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  var i = 0;
  for (var k = 0; k < n; k++) {
    console.log(k, i);
    if (i < m - 1 && B[i] < A[k]) {
      i += 1;
    }
    if (A[k] == B[i]) return A[k];
  }
  return -1;
}

const tests = [
  [
    [1, 2, 5, 6, 9, 10, 11],
    [3, 4, 7, 8, 11],
  ],
  [
    [0, 4, 4, 4, 5],
    [3, 3, 5, 0, 0],
  ],
  [[6], [1, 2, 3, 4, 5, 6]],
  [
    [2, 4, 6, 8, 10, 12, 14, 16, 18, 17],
    [1, 3, 5, 7, 9, 11, 13, 15, 17],
  ],
];

for (let i = 0; i < tests.length; i += 1) {
  console.log(solution(tests[i][0], tests[i][1]));
}
