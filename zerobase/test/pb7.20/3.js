function solution(sticks) {
  sticks = sticks.sort((a, b) => a - b);
  console.log(sticks);
  for (let i = 1; i < sticks[0]; i++) {
    if (
      Math.pow(sticks[1], 2) + Math.pow(sticks[2], 2) ==
      Math.pow(i, 2) + Math.pow(sticks[0] - i, 2)
    ) {
      console.log('0');
      return 'YES';
    }
  }
  for (let i = 1; i < sticks[1]; i++) {
    if (
      Math.pow(sticks[0], 2) + Math.pow(sticks[2], 2) ==
      Math.pow(i, 2) + Math.pow(sticks[1] - i, 2)
    ) {
      console.log('1');
      return 'YES';
    }
  }
  for (let i = 1; i < sticks[2]; i++) {
    if (
      Math.pow(sticks[0], 2) + Math.pow(sticks[1], 2) ==
      Math.pow(i, 2) + Math.pow(sticks[2] - i, 2)
    ) {
      console.log('2');
      return 'YES';
    }
  }

  return 'NO';
}

const input = [
  [6, 1, 5],
  [2, 5, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
