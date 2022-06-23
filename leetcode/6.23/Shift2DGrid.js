function solution(grid, k) {
  let count = 0;
  while (count !== k) {
    count++;
    grid = add(grid);
  }
  return grid;
}
function add(grid) {
  let newGrid = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => 0)
  );

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i == grid.length - 1 && j == grid[i].length - 1) {
        newGrid[0][0] = grid[i][j];
      } else if (j == grid[i].length - 1) {
        newGrid[i + 1][0] = grid[i][j];
      } else {
        newGrid[i][j + 1] = grid[i][j];
      }
    }
  }
  return newGrid;
}

const input = [
  [
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1,
  ],
  [
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4,
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
