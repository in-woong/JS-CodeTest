function solution(A, S) {
  const member = new Map();
  member.set(S, [true, 0]);
  for (let i = 0; i < A.length; i++) {
    if (member.get(A[i][0]) == undefined) {
      member.set(A[i][0], [false, 0]);
    }
    if (member.get(A[i][1]) == undefined) {
      member.set(A[i][1], [false, 0]);
    }
    if (member.get(A[i][1])[0] == true || member.get(A[i][0])[0] == true) {
      member.set(A[i][0], [true, member.get(A[i][0])[1] + 1]);
      member.set(A[i][1], [true, member.get(A[i][1])[1] + 1]);
    } else {
      member.set(A[i][0], [false, member.get(A[i][0])[1] + 1]);
      member.set(A[i][1], [false, member.get(A[i][1])[1] + 1]);
    }
  }
  let result = [];
  for (m of member) {
    if (m[1][0] === false) {
      result.push([m[0], m[1][1]]);
    }
  }
  if (result.length === 0) {
    result.push(S);
    return result;
  } else {
    let max = result[0][1];
    let realR = [];
    for (let i = 0; i < result.length; i++) {
      if (max < result[i][1]) {
        max = result[i][1];
      }
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i][1] == max) {
        realR.push(result[i][0]);
      }
    }
    return realR;
  }
}

const input = [
  [
    ['A', 'B'],
    ['B', 'C'],
    ['A', 'C'],
    ['A', 'D'],
    ['B', 'E'],
  ],
  'E',
];

console.log(`${1} ${solution(input[0], input[1])}`);
