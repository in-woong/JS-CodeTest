function solution(arr, a, b) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      min = min > arr[i] ? arr[i] : min;
    }
  }
  if (min > b) {
    return -1;
  }
  return min;
}

const input = [[[1, 2, 3, 4, 5, 6, 7], 3, 6]];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i][0], input[i][1], input[i][2]));
}
