function answer(mark) {
  //for문을 돌면서 1이면 이전점수 +1; 0이면 0점부여
  let result = 0;
  let score = 0;

  for (let i = 0; i < mark.length; i++) {
    if (mark[i] == 1) {
      result += ++score;
    } else {
      score = 0;
    }
  }
  return result;
}

let input = [
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i])}`);
}
