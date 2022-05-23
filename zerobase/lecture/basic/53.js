function answer(x, y) {
  let min;
  return (min = x > y ? y : x);
}
let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i][0], input[i][1])}`);
}
