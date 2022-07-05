function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        sum(0, i + 1, arr) == sum(i + 1, j, arr) &&
        sum(i + 1, j, arr) == sum(j, arr.length, arr)
      )
        return true;
    }
  }
  return false;
}
function sum(start, end, arr) {
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += arr[i];
  }
  return sum;
}

const input = [
  [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1],
  [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1],
  [3, 3, 6, 5, -2, 2, 5, 1, -9, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
