function answer(length) {
  let result = Array.from(Array(length), () => Array(length).fill(0));
  let x = -1;
  let y = 0;
  let num = 0;
  let direction = 1;
  while (1) {
    for (let i = 0; i < length; i++) {
      x += direction;
      result[y][x] = ++num;
    }
    length--;
    if (length == 0) break;
    for (let j = 0; j < length; j++) {
      y += direction;
      result[y][x] = ++num;
    }
    direction *= -1;
  }

  return result;
}

let input = [3, 5, 6];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i]));
}
