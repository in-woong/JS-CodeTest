// function solution(m, n, board) {
//   // 시계방향으로의 모든 것이 자신과 동일한지 확인하는 함수만들기
//   // 지우는 함수만들기
//   // 0,0 부터 n,n까지 확인 하는 함수 만들기
//   // 1회 확인시에 deleteArray에 있는 값들 지우고 밑으로 내림
//   // 그 함수가 false가 나올 때 까지 반복
//   const boardArray = [];
//   let deleteArray = [1];
//   let count = 0;

//   for (let i = 0; i < m; i++) {
//     boardArray.push(board[i].split(''));
//   }

//   while (deleteArray.length) {
//     deleteArray = [];
//     for (let y = 0; y < m; y++) {
//       for (let x = 0; x < n; x++) {
//         checkSame(boardArray, deleteArray, y, x);
//       }
//     }
//     count += deleteArray.length;
//     calDelete(boardArray, deleteArray);
//   }
//   return count;
// }

// function calDelete(boardArray, deleteArray) {
//   for (let i = 0; i < deleteArray.length; i++) {
//     const [y, x] = deleteArray[i].split('');
//     let lastValue = undefined;
//     let temp = undefined;
//     for (let i = 0; i <= y; i++) {
//       if (boardArray[i][x]) {
//         temp = boardArray[i][x];
//         boardArray[i][x] = lastValue;
//         lastValue = temp;
//       }
//     }
//   }
// }

// function checkSame(boardArray, deleteArray, y, x) {
//   if (y + 1 >= boardArray.length || x + 1 >= boardArray[0].length) return;
//   if (!boardArray[y][x]) return;
//   const value = boardArray[y][x];
//   const values = [
//     [y, x],
//     [y, x + 1],
//     [y + 1, x],
//     [y + 1, x + 1],
//   ];
//   for (let i = 0; i < values.length; i++) {
//     const [tempY, tempX] = values[i];
//     if (boardArray[tempY][tempX] != value) return;
//   }

//   for (let i = 0; i < values.length; i++) {
//     const temp = String(values[i][0]) + String(values[i][1]);
//     if (deleteArray.includes(temp)) continue;
//     deleteArray.push(temp);
//   }
// }

//https://github.com/codeisneverodd/programmers-coding-test
//더 좋은 풀이가 존재할 수 있습니다.
//정답 1 - codeisneverodd
function solution(m, n, board) {
  board = board.map((r) => r.split(''));
  const getSquare = ([r, c]) => [
    [r, c],
    [r, c + 1],
    [r + 1, c],
    [r + 1, c + 1],
  ];

  const isSquare = ([r, c]) => {
    if (board[r][c] === '@') return false;
    return (
      [...new Set(getSquare([r, c]).map(([r, c]) => board[r][c]))].length === 1
    );
  };

  const remove = () => {
    const removeArr = [];
    for (let r = 0; r < m - 1; r++) {
      for (let c = 0; c < n - 1; c++) {
        if (isSquare([r, c]))
          getSquare([r, c]).forEach((v) => removeArr.push(v));
      }
    }
    removeArr.forEach(([r, c]) => {
      board[r][c] = '@';
    });

    return removeArr.length !== 0;
  };

  const pull = () => {
    for (let c = 0; c < n; c++) {
      const remainColumn = Array.from(
        { length: m },
        (_, r) => board[r][c]
      ).filter((v) => v !== '@');
      const resultColumn = [
        ...Array(m - remainColumn.length).fill('@'),
        ...remainColumn,
      ];
      resultColumn.forEach((v, r) => {
        board[r][c] = v;
      });
    }
    return board;
  };

  while (remove()) {
    pull();
  }

  return board.flat().filter((v) => v === '@').length;
}

function solution(m, n, board) {
  board = board.map((items) => items.split(''));
  const getSquare = (y, x) => {
    return [
      [y, x],
      [y, x + 1],
      [y + 1, x],
      [y + 1, x + 1],
    ];
  };

  const checkSquare = (y, x) => {
    if (board[y][x] == '@') return false;
    const values = [...new Set(getSquare(y, x).map(([y, x]) => board[y][x]))];
    return values.length == 1;
  };

  const remove = () => {
    const deleteArray = [];
    for (let y = 0; y < m - 1; y++) {
      for (let x = 0; x < n - 1; x++) {
        if (checkSquare(y, x)) {
          getSquare(y, x).forEach(([y, x]) => {
            deleteArray.push([y, x]);
          });
        }
      }
    }
    deleteArray.forEach(([y, x]) => (board[y][x] = '@'));

    return deleteArray.length !== 0;
  };
  const pull = () => {
    for (let j = 0; j < n; j++) {
      const array = [];
      for (let i = 0; i < m; i++) {
        if (board[i][j] != '@') {
          array.push(board[i][j]);
        }
      }
      const column = [...Array(m - array.length).fill('@'), ...array];
      column.forEach((value, idx) => (board[idx][j] = value));
    }
  };

  while (remove()) {
    pull();
  }

  return board.flat().filter((value) => value == '@').length;
}
