function getBuyMethod(P, K) {
  let count = new Array(K);
  let result = 0;

  count.fill(0);

  for (let i = 0; i < P.length; i++) {
    count[P[i]] += 1;
  }
  for (let i = 0; i < K; i++) {
    if (count[i] >= 2) {
      result = result + (count[i] * (count[i] - 1)) / 2;
    }
    console.log(result);
  }
  return result;
}

function solution(A, K) {
  let arr = new Array(A.length + 1);
  arr[0] = 0;
  for (let i = 1; i < A.length + 1; i++) {
    arr[i] = (arr[i - 1] + A[i - 1]) % K;
  }

  return getBuyMethod(arr, K);
}

const input = [
  [[1, 2, 3, 4, 5, 6], 4],
  [[1, 2, 3, 4, 5, 6], 3],
  [[1, 2, 3, 4, 5, 6], 2],
  [[1, 2, 3, 4, 5, 6], 5],
  [[1, 2, 3, 4, 5, 6], 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
