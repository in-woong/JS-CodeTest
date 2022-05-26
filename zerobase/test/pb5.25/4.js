function solution(arr) {
  let countArr = [];
  let count = 0;
  arr.forEach((item) => {
    if (item == 1) {
      count++;
    } else {
      countArr.push(count);
      count = 0;
    }
    console.log(count, item);
  });
  countArr.push(count);
  return Math.max(...countArr);
}

const input = [
  [1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
