function answer(user) {
  let reverse = [];
  const length = user.length;
  for (let i = 0; i < length; i++) {
    reverse.push(user.pop());
  }
  return reverse;
}

let input = [
  [1, 2, 3, 4],
  [-1, 6, 'hello', -15],
  ['apple', 'banana', 'mango'],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
