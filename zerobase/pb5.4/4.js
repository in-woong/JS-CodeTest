function solution(arr) {
  arr.sort((a, b) => a - b);
  arr.pop();
  arr.shift();
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  result = Math.floor(result / arr.length);
  return result;
}

const input = [[1, 3, 3, 3, 5]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
