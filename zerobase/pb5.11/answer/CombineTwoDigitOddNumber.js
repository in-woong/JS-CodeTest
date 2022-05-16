function solution(array) {
  let set = new Set();
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i === j) continue;
      const num = createNumber(array[i], array[j]);
      const isEven = num % 2 === 1;

      if (isEven) {
        set.add(num);
      }
    }
  }
  return set.size;
}

function createNumber(tenDigits, oneDigit) {
  return tenDigits * 10 + oneDigit;
}
const input = [[1, 3, 4], [1, 4, 6, 8], [4, 2, 6, 8, 4, 2], [], [5], [5, 5]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
