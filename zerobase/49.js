function answer(a, b, c, d) {
  let result;
  if (a / b > c / d) {
    result = 1;
  } else if (a / b < c / d) {
    result = -1;
  } else {
    result = 0;
  }

  return result;
}

let input = [
  [14, 2, 6, 6],
  [6, 7, 8, 9],
  [18, 2, 36, 4],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `${i + 1} ${answer(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
