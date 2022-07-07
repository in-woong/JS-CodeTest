function solution(arr, prefix, separator, postfix) {
  let result = '';
  if (prefix !== undefined) {
    result += prefix;
  }

  console.log([...arr.entries()]);
  for (const [i, v] of arr.entries()) {
    if (i > 0) {
      result += separator;
    }
    result += v;
  }
  if (postfix !== undefined) {
    result += postfix;
  }
  return result;
}

const input = [[[1, 3, 0, 7, 9], '<', ', ', '>']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
