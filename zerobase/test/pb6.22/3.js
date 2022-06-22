function solution(n, k, thieves) {
  thieves = thieves
    .map((thief) => Number(n) - Number(thief))
    .sort((a, b) => a - b);
  console.log(thieves);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < thieves.length; i++) {
    sum += thieves[i];
    count++;
    console.log(sum, thieves[i], count, n);
    if (sum >= n) return count - 1;
  }
  return count;
}
const input = [
  [10, 6, [8, 7, 5, 4, 9, 4]],
  [3, 2, [1, 1]],
  [7, 4, [4, 5, 6, 6]],
  [7, 5, [4, 5, 6, 6, 6]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1], input[i][2])}`);
}
