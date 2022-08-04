function solution(puzzle, word) {
  const y = puzzle.length;
  const x = puzzle[0].length;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let answer = false;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (puzzle[i][j] == word[0]) {
        if (count(i, j, 0)) answer = true;
      }
    }
  }

  function count(dy, dx, n) {
    if (n == word.length - 1) {
      return true;
    }
    for (let i = 0; i < dir.length; i++) {
      const dirY = dy + dir[i][0];
      const dirX = dx + dir[i][1];
      if (
        dirY >= 0 &&
        dirY < y &&
        dirX >= 0 &&
        dirX < x &&
        puzzle[dirY][dirX] == word[n + 1]
      ) {
        return count(dirY, dirX, n + 1);
      }
    }
    return false;
  }

  return answer;
}
