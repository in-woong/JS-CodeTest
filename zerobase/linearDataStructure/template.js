function answer() {}

let input = [[], [], []];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i][0], input[i][1])}`);
}
