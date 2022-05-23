function answer(train) {
  let stack = [];
  let num = 0;
  for (let i = 0; i < train.length; i++) {
    while (stack.length === 0 || stack[stack.length - 1] < train[i]) {
      stack.push(++num);
    }
    if (stack[stack.length - 1] == train[i]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return true;
}

let input = [
  [1, 2, 3],
  [3, 2, 1],
  [3, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
