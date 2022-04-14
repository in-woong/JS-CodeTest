function countDigit(number, d, k) {
  let power = 10 ** d;
  let nextPower = power * 10;
  let right = number % power;
  console.log(power, nextPower, right);

  let down = number - parseInt(number % nextPower);
  let up = down + nextPower;
  console.log(down, up);

  digit = parseInt(number / power) % 10;
  console.log(down, up, digit);
  if (digit < k) {
    return parseInt(down / 10);
  } else if (digit == k) {
    return parseInt(down / 10) + right + 1;
  } else {
    return parseInt(up / 10);
  }
}

function solution(N, K) {
  let count = 0;

  for (let i = 0; i < N.toString().length; i++) {
    count += countDigit(N, i, K);
  }

  return count;
}
const input = [
  [25, 2],
  [65535, 6],
  [1, 2],
  [9999, 9],
  [12345, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
