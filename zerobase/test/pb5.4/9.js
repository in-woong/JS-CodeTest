function solution(arr, k) {
  arr.sort((a, b) => b - a);
  const array = arr.filter((value, index) => {
    console.log(index % k);
    return index % k == 0;
  });
  return array.reduce((a, b) => a + b);
}
const input = [[[6, 2, 1, 4, 4], 2]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
