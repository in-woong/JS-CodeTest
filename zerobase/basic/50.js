function answer(year) {
  let result = false;
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    result = true;
  }
  return result;
}

let input = [4, 100, 124, 247, 400];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${answer(input[i])}`);
}
