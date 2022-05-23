function solution(N, K) {
  let arr = new Array(N);
  let number = 0;

  for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
  }
  for (let i = 0; i < N - 1; i++) {
    number += K - 1;
    number %= arr.length;
    arr.splice(number, 1);
  }
  return arr[0];
}

const input = [
  [7, 3],
  [10, 1],
  [10, 2],
  [9, 8],
  [5, 9],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
