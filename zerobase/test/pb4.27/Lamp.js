function solution(arr, n) {
  //0,0부터 n만큼 위아래로 계산해서 1의개수가 몇개인지 array.push
  //Max 출력
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      array.push(find(i, j, n, arr));
    }
  }
  return Math.max(...array);
}
const d = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

function find(y, x, n, arr) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let dirY = y + i;
      let dirX = x + j;
      if (
        dirY >= 0 &&
        dirY < arr.length &&
        dirX >= 0 &&
        dirX < arr[0].length &&
        arr[dirY][dirX]
      ) {
        result++;
      }
    }
  }
  return result;
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
