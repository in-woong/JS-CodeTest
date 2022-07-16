var numIslands = function (grid) {
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );

  const direction = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  function count(i, j) {
    for (let n = 0; n < direction.length; n++) {
      const [dy, dx] = direction[n];
      let dirY = i + dy;
      let dirX = j + dx;

      if (
        dirY >= 0 &&
        dirY < grid.length &&
        dirX >= 0 &&
        dirX < grid[0].length &&
        grid[dirY][dirX] == '1' &&
        !visited[dirY][dirX]
      ) {
        visited[dirY][dirX] = true;
        count(dirY, dirX);
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1' && !visited[i][j]) {
        answer++;
        count(i, j);
      }
    }
  }

  return answer;
};
