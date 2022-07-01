// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

function solution(digits) {
  let co = true;
  for (let i = digits.length - 1; i >= 0 && co; i--) {
    digits[i]++;
    co = digits[i] >= 10;
    co && (digits[i] = 0);
  }
  co && digits.unshift(1);
  return digits;
}

const input = [
  [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
  [1, 9],
  [9],
  [9, 9],
  [4, 3, 2, 1],
  [1, 2, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
