function solution(number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += count(i);
  }
  return result;
}
function count(n) {
  let arr = n.toString(2).split('');
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) count++;
  }
  return count;
}

const input = [3, 5, 7];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
