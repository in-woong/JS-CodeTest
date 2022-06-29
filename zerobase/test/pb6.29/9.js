function solution(arr) {
  while (arr.length !== 1) {
    const newArr = [];
    for (let i = 0; i < arr.length / 2; i++) {
      if (i % 2) {
        newArr.push(Math.max(arr[i * 2], arr[i * 2 + 1]));
      } else {
        newArr.push(Math.min(arr[i * 2], arr[i * 2 + 1]));
      }
    }
    arr = newArr;
  }
  return arr[0];
}
const input = [[9, 1, 0, 3, 2, 6, 7, 7]];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
