function solution(board) {
  const n = board.lenth;
  const widthBingo = new Array(n).fill(true);
  const highBingo = new Array(n).fill(true);

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!board[y][x]) {
        widthBingo[x] = false;
        highBingo[y] = false;
      }
    }
  }

  let bingoNum = 0;
  for (let i = 0; i < n; i++) {
    if (widthBingo[i]) {
      bingoNum++;
    }
    if (highBingo[i]) {
      bingoNum++;
    }
  }
  return bingoNum;
}
