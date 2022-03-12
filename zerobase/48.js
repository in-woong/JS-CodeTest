function answer(x, y) {
  let result = '';
  if (x > y) {
    result = '>';
  } else if (x < y) {
    result = '<';
  } else {
    result = '=';
  }
  return result;
}

let input = [
  [3, 5],
  [7, 4],
  [2, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}
