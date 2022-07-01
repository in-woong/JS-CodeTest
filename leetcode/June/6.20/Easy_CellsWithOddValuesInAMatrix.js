function solution(m, n, indices) {
  let array = Array.from({ length: m }, () =>
    Array.from({ length: n }).fill(0)
  );

  for (let i = 0; i < indices.length; i++) {
    const [row, column] = indices[i];
    for (let i = 0; i < array.length; i++) {
      if (i == row) {
        array[i] = array[i].map((item) => item + 1);
      }

      array[i][column]++;
    }
  }
  return findOdd(array);
}

function findOdd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] % 2 !== 0) {
        count++;
      }
    }
  }
  return count;
}

const input = [
  [
    2,
    3,
    [
      [0, 1],
      [1, 1],
    ],
  ],
  [
    2,
    2,
    [
      [1, 1],
      [0, 0],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1], input[i][2])}`);
}
