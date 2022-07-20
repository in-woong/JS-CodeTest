function solution(grid) {
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );

  const direction = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  const dfs = function (y, x) {
    for (let i = 0; i < direction.length; i++) {
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
        visited[dirY][dirX] = true;
        dfs(dirY, dirX);
      }
    }
  };

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1' && visited[i][j] == false) {
        count++;
        visited[i][j] = true;
        dfs(i, j);
      }
    }
  }
  return count;
}
