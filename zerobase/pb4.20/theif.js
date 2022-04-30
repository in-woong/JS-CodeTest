function solution(A, B) {
  const array = A.slice().sort((a, b) => a - b);
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (sum >= B) return count;
    sum += array[i];
    count++;
  }
  return count;
}

const input = [
  [[1, 2, 3, 4, 5], 15],

  [[1, 2, 3, 4, 5], 10],

  [[1, 2, 3, 4, 5], 5],

  [[1, 2, 3, 4, 5], 3],

  [[1, 2, 3, 4, 5], 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
