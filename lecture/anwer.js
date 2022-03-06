const { serialize } = require('v8');

const input = [
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1],
];

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let nx, ny;
let size = [];
let count = 0;

const n = input.length;
const check = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => 0)
);

function BFS(x, y) {
  check[x][y] = 1;
  count += 1;
  for (let i = 0; i < 4; i++) {
    nx = x + dir[i][0];
    ny = y + dir[i][1];
    if (0 <= nx && nx < n && 0 <= ny && ny < n) {
      if (input[nx][ny] == 1 && check[nx][ny] !== 1) {
        BFS(nx, ny);
      }
    }
  }
}

// BFS(3, 0);
// console.log('answer', count);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (check[i][j] !== 1 && input[i][j] == 1) {
      BFS(i, j);
      size.push(count);
      count = 0;
    }
  }
}
console.log(size);

//BFS는 (1,1)이 들어와서
