function solution(A) {
  let arr = [A[0]];

  while (arr.length != A.length) {
    arr.push([]);

    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        arr[arr.length - 1].push(arr[arr.length - 2][0] + A[arr.length - 1][0]);
      } else if (i == arr.length - 1) {
        arr[arr.length - 1].push(
          arr[arr.length - 2][arr.length - 2] +
            A[arr.length - 1][arr.length - 1]
        );
      } else {
        arr[arr.length - 1].push(
          A[arr.length - 1][i] +
            Math.min(arr[arr.length - 2][i - 1], arr[arr.length - 2][i])
        );
      }
    }
  }
  console.log(arr);
  return Math.min(...arr[arr.length - 1]);
}

const input = [
  [[1], [2, 5], [7, 10, 1], [9, 4, 4, 5]],
  [[1]],
  [[1], [2, 1], [1, 10, 1], [9, 1, 1, 5], [1, 5, 0, 3, 5]],
  [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]],
  [[10], [8, 9], [7, 6, 5], [4, 3, 2, 1]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
