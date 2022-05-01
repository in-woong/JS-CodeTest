function solution(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    let temp = 0;
    for (let j = i; j < A.length; j++) {
      temp += A[j];
      result.push(temp);
    }
  }
  return Math.max(...result);
}

const input = [
  [-2, 5, -3, 6, 8, -1, -5, 3],
  [-1, -9, -9, -1, 3, 26, -9, 0, -3, 8, -9, 8, -6, 5],
  [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [-1000, 1000, -1000, 1000, -1000, 1000, -1000],
  [-1000, 2000, -3000, 4000, -5000, 4000, -3000, 2000, -1000],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
