function solution(x) {
  let num = 0;

  do {
    num++;
  } while (num * num <= x);
  return num - 1;
}

const input = [4, 8];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
