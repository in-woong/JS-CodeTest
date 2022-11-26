function solution(board) {
  const row = board.length;
  const column = board[0].length;
  const dp = Array.from({ length: row + 1 }, () =>
    Array.from({ length: column + 1 }, () => 0)
  );
  let global_max = 0;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      if (board[i][j] === 1) {
        dp[i + 1][j + 1] = Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
        global_max =
          dp[i + 1][j + 1] > global_max ? dp[i + 1][j + 1] : global_max;
      }
    }
  }
  return global_max ** 2;
}
