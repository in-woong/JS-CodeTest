function solution(board) {
  //다섯가지 모양중에 하나인지 찾기, 찾아서, 그 빈칸 위에 무엇이 있나 확인
  let answer = 0;

  const check = (y, x, target) => {
    const [dy, dx] = target;
    const [targetY, targetX] = [y + dy, x + dx];

    for (let y = 0; y < targetY; y++) {
      if (board[(y, targetX)] !== 0) return false;
    }
    return true;
  };

  const recursive = (y, x, values, maxValues) => {
    const value = board[y][x];
    if (value == 0) return;

    for (let i = 0; i < values.length; i++) {
      const [dy, dx] = values[i];
      if (
        x + dx < 0 ||
        y + dy < 0 ||
        x + dx >= board.length ||
        y + dy >= board.length
      )
        return;

      if (board[y + dy][x + dx] !== value) return;
    }

    //one이 맞다면 x값 위에 무엇이 있는지 없는지 확인
    for (let i = 0; i < maxValues.length; i++) {
      //각 x의 값에 해당하는, 최대 y값을 구하고,
      const [dy, dx] = maxValues[i];
      const [targetY, targetX] = [y + dy, x + dx];
      for (let j = 0; j < targetY; j++) {
        if (board[j][targetX] !== 0) return;
      }
    }

    //위에 아무것도 없다면

    for (let i = 0; i < values.length; i++) {
      const [dy, dx] = values[i];
      const [targetY, targetX] = [y + dy, x + dx];

      board[targetY][targetX] = 0;
    }

    answer++;
    solutionFunc(board);
  };
  const find = (y, x) => {
    const stereotypes = [
      [
        [0, 0],
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, -1],
      ],
      [
        [0, 0],
        [1, 0],
        [2, 0],
        [2, 1],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [-1, 2],
      ],
      [
        [0, 0],
        [0, 1],
        [0, 2],
        [-1, 1],
      ],
    ];
    const maxValues = [
      [
        [1, 1],
        [1, 2],
      ],
      [[2, -1]],
      [[2, 1]],
      [
        [0, 0],
        [0, 1],
      ],
      [
        [0, 0],
        [0, 2],
      ],
    ];
    for (let i = 0; i < stereotypes.length; i++) {
      const type = stereotypes[i];
      recursive(y, x, type, maxValues[i]);
    }
  };

  function solutionFunc(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        find(i, j);
      }
    }
    return answer;
  }

  return solutionFunc(board);
}
