function solution(grid) {
  const isIsland = (i, j) =>
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[i].length &&
    grid[i][j] === '1';

  const bfs = (i, j) => {
    const queue = [[i, j]];

    while (queue.length) {
      const [i, j] = queue.shift();

      grid[i][j] = '0';

      if (isIsland(i + 1, j)) queue.push([i + 1, j]);
      if (isIsland(i, j + 1)) queue.push([i, j + 1]);
      if (isIsland(i - 1, j)) queue.push([i - 1, j]);
      if (isIsland(i, j - 1)) queue.push([i, j - 1]);
    }
  };

  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == '1') {
        counter++;
        bfs(i, j);
      }
    }
  }
  return counter;
}

const input = [
  [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ],
  [
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ],
  [
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '1', '0'],
  ],
  [
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '1', '0', '1', '0'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
