function solution(array, s) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][array[i].length - 1 - j] !== s[s.length - 1 - j]) {
        break;
      }
      if (j == array[i].length - 1) count++;
    }
  }

  return count;
}
const input = [
  [[1, 0, 0, 0, 1, 0, 0, 1], 2],
  [[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
  [[0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
