function solution(arr, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let m = 0;
    for (let j = i; j < arr.length; j++) {
      m += arr[j];
      if (m % n == 0) {
        result.push(m);
      }
    }
  }
  return result.length;
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
