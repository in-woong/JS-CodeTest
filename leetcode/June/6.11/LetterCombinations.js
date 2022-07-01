function solution(digits) {
  const object = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'f'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let result = [];
  for (let i = 0; i < digits.length; i++) {
    const temp = [];
    const selectedArray = object[digits[i]];
    if (result.length == 0) {
      selectedArray.forEach((v) => result.push(v));
      continue;
    }
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < selectedArray.length; k++) {
        temp.push(`${result[j] + selectedArray[k]}`);
      }
    }
    result = temp;
  }

  return result;
}

const input = ['23', '', '2', '234'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
