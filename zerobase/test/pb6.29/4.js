function solution(arr) {
  arr.forEach((item) => {
    if (item == null) return 'NO';
  });
  const n = count(arr.length);
  console.log('level1', n);
  for (let i = 1; i < Math.pow(2, n - 1); i++) {
    if (arr[i] >= arr[2 * i] || arr[i] >= arr[2 * i + 1]) {
      return 'NO';
    }
  }
  console.log('level2');
  let temp;
  for (let i = Math.pow(2, n - 1); i < arr.length; i++) {
    if (i == Math.pow(2, n - 1)) {
      temp = Math.pow(2, n - 1);
      continue;
    }

    if (temp >= arr[i]) {
      return 'NO';
    } else {
      temp = arr[i];
    }
  }
  return 'YES';
}

function count(n) {
  let count = 0;
  while (n !== 1) {
    n = Math.ceil(n / 2);
    count++;
  }
  return count;
}
const input = [
  [0, 5, 10, 15],
  [0, 10, 5, 15],
  [0, 5, 10],
  [0, 1, 2, 3, 4],
  [0, 4, 5, 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
