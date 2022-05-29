function search(arr, countries, country, count) {
  for (let i = 0; i < country.length; i++) {
    if (country[i] == 1 && arr[i] == 0) {
      arr[i] = 1;
      count++;
      count = search(arr, countries, countries[i], count);
    }
  }
  return count;
}

function solution(A) {
  let count = 0;
  let result = 0;
  let arr = Array.from({ length: A.length }, () => 0);

  for (let i = 0; i < A.length; i++) {
    if (arr[i] == 0) {
      count = 1;
      arr[i] = 1;
      count = search(arr, A, A[i], count);
      if (count > result) {
        result = count;
      }
    }
  }

  return result;
}
const input = [
  [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  [
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
  ],
  [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
  [
    [1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
