function solution(A) {
  let result = [];
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) {
        result.push(A[j] - A[i]);
      }
    }
  }
  return result.length == 0 ? 0 : Math.max(...result);
}

const input = [
  [100000, 99000, 99000, 98000, 97000],
  [100000, 99000, 99000, 98000, 97000, 110000],
  [10000, 50000, 70000, 30000, 60000, 110000],
  [100, 50, 150, 100, 200],
  [10000, 10000, 10000, 10000],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
