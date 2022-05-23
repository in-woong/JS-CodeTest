function solution(A) {
  let maxSum = 0;
  let s = 0;

  for (let i = 0; i < A.length; i++) {
    console.log(A[i],s, 'A[i]');
    s += A[i];

    console.log(s, 's');

    if (maxSum < s) {
      maxSum = s;
    } else if (s < 0) {
      s = 0;
    }
  }
  return maxSum;
}

const input = [
  [2, -8, 3, -2, 4, -10],
  [-2, -8, 3, -2, -4, -10],
  [-4, -3, -10],
  [1, 2, 5, -8, 9, -2, 30],
  [30, -10, 20, -50],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
