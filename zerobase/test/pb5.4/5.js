function solution(arr) {
  const aLength = arr.length;
  let count = [];
  for (let i = 0; i < aLength; i++) {
    if (arr[i] % 2 == 1) {
      count.push([i, arr[i]]);
    }
  }
  console.log(count);
  for (let i = 0; i < count.length; i++) {
    arr.splice(count[i][0] + i, 0, count[i][1]);
    arr.pop();
    console.log(arr);
  }

  return arr;
}

const input = [[0, 2, 1, 4, 3, 0]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
