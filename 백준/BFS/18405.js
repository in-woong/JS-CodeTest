const fs = require('fs');

let input = fs.readFileSync('./data').toString().trim().split('\n');

const [n, k] = input
  .shift()
  .split(' ')
  .map((v) => v * 1);

const [target_s, target_x, target_y] = input
  .pop()
  .split(' ')
  .map((v) => v * 1);

let a = input.map((v) => v.split(' ').map((v) => v * 1));
let q = [];
let s = 0;
let nx, ny;

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (a[i][j] !== 0) {
      q.push([a[i][j], s, i, j]);
    }
  }
}

q.sort((a, b) => a[0] - b[0]);

while (q.length > 0) {
  const [virus, time, x, y] = q.shift();
  if (time === target_s) {
    break;
  }
  for (let i = 0; i < 4; i++) {
    nx = x + dir[i][0];
    ny = y + dir[i][1];
    if (0 <= nx && nx < n && 0 <= ny && ny < n && a[nx][ny] == 0) {
      a[nx][ny] = virus;
      q.push([virus, time + 1, nx, ny]);
    }
  }
}

console.log(a[target_x - 1][target_y - 1]);