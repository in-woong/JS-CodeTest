function solution(field, n) {
  const fieldRow = field.length;
  const fieldCol = field[0].length;
  const rowSize = fieldRow - n + 1;
  const colSize = fieldCol - n + 1;

  let ret = 0;
  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      ret = Math.max(ret, countPlant(field, n, row, col));
    }
  }
  return ret;
}

function countPlant(field, n, row, col) {
  let plantCount = 0;
  for (let curRow = row; curRow < row + n; curRow++) {
    for (let curCol = col; curCol < col + n; curCol++) {
      plantCount += field[curRow][curCol];
    }
  }
  return plantCount;
}

const input = [
  [
    [
      [1, 0, 1],
      [0, 0, 1],
      [0, 1, 1],
    ],
    2,
  ],
  [
    [
      [0, 0, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
    ],
    3,
  ],
  [
    [
      [1, 1, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [1, 0, 1, 1, 0],
    ],
    3,
  ],
  [[[0]], 1],
  [[[1]], 1],
  [
    [
      [0, 0, 0, 1, 1, 0, 0],
      [1, 1, 0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0, 1, 0],
      [0, 1, 0, 1, 1, 1, 0],
    ],
    3,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
