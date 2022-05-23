function answer(height) {
  let str = '\n';
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i; j++) {
      str += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      str += '*';
    }
    for (let m = 0; m < height - i; m++) {
      str += ' ';
    }
    str += '\n';
  }

  return str;
}

let input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
