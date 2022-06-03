function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    answer = Math.abs(answer) > Math.abs(arr[i]) ? arr[i] : answer;
  }

  return answer;
}
const input = [
  [5, 2, 1, 3],
  [7, 1, 7, 4, 6],
  [4, 2, 2],
  [0],
  [100],
  [18, 78, 75, 63, 19, 91, 71, 13, 86, 67],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
