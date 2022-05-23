function answer(a, b, c) {
  let number = 0;

  num = [a, b, c];
  num.sort((x, y) => x - y);

  const d = b - a < c - b ? b - a : c - b;
  if (a + d == b) {
    number = a + d + d;
  } else {
    number = a + d;
  }
  return number;
}

let input = [
  [1, 7, 10],
  [3, 8, 18],
  [2, 5, 11],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1], input[i][2])}`);
}
