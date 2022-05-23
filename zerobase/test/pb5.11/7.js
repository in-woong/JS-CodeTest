function solution(array) {
  let result = [];
  let n = 1;
  let i = 0;
  while (true) {
    console.log(array[i], n);
    if (array[i] == n) {
      result.push('In');
      i++;
    } else {
      result.push('In');
      result.push('Out');
    }
    if (array[array.length - 1] == n) {
      result.push('End');
      break;
    }
    n++;
  }
  return result;
}
const input = [[1, 3, 4]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
