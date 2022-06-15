//test 1,4, 확인

function solution(lineUp, level) {
  let index = -1;
  for (let i = 0; i < lineUp.length; i++) {
    if (lineUp[i] == 1) {
      if (index == -1) {
        index = i;
      } else {
        if (i - index - 1 < level) {
          return false;
        }
        index = i;
      }
    }
  }
  return true;
}
const input = [
  [[1, 0, 0, 0, 1, 0, 0, 1], 2],
  [[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
  [[0, 1, 0, 0, 0, 1, 0, 0, 0, 1], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
