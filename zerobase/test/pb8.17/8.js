function solution(board) {
  const n = board.length;
  let answer = 0;
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!board[y][x]) break;
      if (x == n - 1) answer++;
    }
  }
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (!board[y][x]) break;
      if (y == n - 1) answer++;
    }
  }
  return answer;
}
