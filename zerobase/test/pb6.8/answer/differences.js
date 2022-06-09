function solution(N, K) {
  if (K == 0) {
    return Array.from(Array(N), (_, i) => i + 1);
  }
  if (N % (2 * K) != 0) {
    return [-1];
  }
  let result = new Array(N + 1);
  for (let i = 1; i <= N; i++) {
    if (result[i] == null) {
      result[i] = i + K;
      result[i + K] = i;
    }
  }
  console.log(result);
  return result.slice(1);
}
const input = [
  [3, 2],
  [4, 2],
  [10, 5],
  [10, 0],
  [7, 5],
  [94, 47],
  [233, 118],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
