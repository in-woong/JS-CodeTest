function solution(prices) {
  let max = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = min > prices[i] ? prices[i] : min;
    max = max < prices[i] - min ? prices[i] - min : max;
  }
  return max;
}

const input = [
  [7, 1, 5, 3, 6, 4],
  [7, 6, 4, 3, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
