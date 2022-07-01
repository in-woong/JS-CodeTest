// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

function solution(x) {
  if (x < 0) return false;
  if (x.toString().split('').reverse().join('') !== x.toString()) return false;
  return true;
}
const input = [121, 10, -121];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
