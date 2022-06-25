function solution(n, rounds) {
  const start = rounds[0];
  const end = rounds[rounds.length - 1];
  const result = [];

  if (start <= end) {
    for (let i = start; i <= end; i++) result.push(i);
  } else {
    for (let i = 1; i <= end; i++) result.push(i);
    for (let i = start; i <= n; i++) result.push(i);
  }
  return result;
}


const input = [
  [4, [1, 3, 1, 2]],
  [2, [2, 1, 2, 1, 2, 1, 2, 1, 2]],
  [7, [1, 3, 5, 7]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
