function solution(arr) {
  arr.sort((a, b) => a - b).reverse();
  const n = arr.length;

  const border = (n >> 1) - 1;
  let i = n >> 1;
  console.log(border, n, i);
  while (i < n && arr[border] == arr[i]) {
    i += 1;
  }
  return i;
}

const input = [
  [10, 20, 30, 40, 50],
  [100, 100, 100, 100, 100, 95, 95, 95, 90],
  [90, 90, 90, 90, 90, 90, 90],
  [10, 20],
  [50, 50, 50, 45, 10],
  [50, 50, 50, 50, 50, 50],
  [100, 100],
  [60, 79, 10, 60, 30, 94, 60],
  [63, 21, 44, 58, 61, 100, 11, 50, 37, 27, 73, 34, 51, 54, 44],
  [100, 95, 95],
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
