function solution(numbers) {
  let array = numbers.slice();
  let [count, sum] = check(array);
  console.log(count, sum);
  if (count == 0) return 0;
  else {
    count--;
    while (sum % 2 == 0) {
      sum = sum / 2;
      count++;
    }
    return count;
  }
}
function check(array) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      count++;
      sum += array[i];
    }
  }
  return [count, sum];
}
const input = [
  [2, 4, 8],
  [1, 5, 4],
  [1, 5, 4, 10, 20],
  [1, 9],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
