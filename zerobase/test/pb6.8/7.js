//dfs;
const direction = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

function solution(grid) {
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (visited[i][j] == false && grid[i][j] == '1') {
        dfs(i, j, visited, grid);
        count++;
      }
    }
  }
  return count;
}

function dfs(y, x, visited, grid) {
  const queue = [];
  queue.push([y, x]);
  while (queue.length > 0) {
    const [y, x] = queue.shift();
    visited[y][x] = true;
    for (let i = 0; i < 4; i++) {
      const dirY = y + direction[i][0];
      const dirX = x + direction[i][1];

      if (
        dirY >= 0 &&
        dirY < grid.length &&
        dirX >= 0 &&
        dirX < grid[0].length &&
        visited[dirY][dirX] == false &&
        grid[dirY][dirX] == '1'
      ) {
        queue.push([dirY, dirX]);
      }
    }
  }
}

const input = [
  [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ],
  [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
