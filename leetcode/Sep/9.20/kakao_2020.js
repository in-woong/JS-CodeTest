// function solution(board) {
//   const visited = Array.from({ length: board.length }, () =>
//     Array.from({ length: board[0].length }, () => false)
//   );
//   const queue = [
//     [
//       [0, 0],
//       [0, 1],
//     ],
//   ];
//   const dir = [
//     [
//       [0, 1],
//       [0, 1],
//     ],
//     [
//       [0, -1],
//       [0, -1],
//     ],
//     [
//       [-1, 0],
//       [-1, 0],
//     ],
//     [
//       [1, 0],
//       [1, 0],
//     ],
//     [
//       [1, 1],
//       [0, 0],
//     ],
//     [
//       [0, 0],
//       [1, -1],
//     ],
//     [
//       [1, -1],
//       [0, 0],
//     ],
//     [
//       [0, 0],
//       [-1, 1],
//     ],
//   ];
//   let level = 0;
//   let num = queue.length;
//   let tempNum = 0;
//   while (queue.length) {
//     if (num == 0) {
//       console.log('lllllllllllllllllll', level);
//       level++;
//       num += tempNum;
//       tempNum = 0;
//     }
//     const now = queue.shift();
//     num--;
//     console.log('nowwwwwww', num, tempNum);
//     visited[(now[0][0], now[0][1])] = true;
//     visited[(now[1][0], now[1][1])] = true;
//     if (confirm(now, board.length)) return level;
//     for (let i = 0; i < dir.length; i++) {
//       const element = dir[i];
//       if (i == 4 && board[(element[0][0] + 1, element[0][1])] == 1) continue;
//       if (i == 5 && board[(element[1][0], element[1][1] + 1)] == 1) continue;
//       if (i == 6 && board[(element[0][0] - 1, element[0][1])] == 1) continue;
//       if (i == 7 && board[(element[1][0], element[1][1] - 1)] == 1) continue;
//       const [one, two] = element[0];
//       const [three, four] = element[1];
//       const nextElement = [
//         [now[0][0] + one, now[0][1] + two],
//         [now[1][0] + three, now[1][1] + four],
//       ];
//       if (check(nextElement, board, visited, board.length)) {
//         queue.push(nextElement);
//         tempNum++;
//       }
//     }
//     console.log(queue.length, num, tempNum);
//   }
// }

// function confirm(now, n) {
//   if (now[0][0] == n - 1 && now[0][1] == n - 1) return true;
//   if (now[1][0] == n - 1 && now[1][1] == n - 1) return true;
//   return false;
// }

// function check(element, board, visited, n) {
//   const [a, b] = element[0];
//   const [c, d] = element[1];
//   if (a < 0 || n <= a || b < 0 || n <= b || c < 0 || n <= c || d < 0 || n <= d)
//     return false;
//   if (board[a][b] || board[c][d] || visited[a][b] || visited[c][d])
//     return false;

//   return true;
// }
// const input = [
//   [
//     [0, 0, 0, 1, 1],
//     [0, 0, 0, 1, 0],
//     [0, 1, 0, 1, 1],
//     [1, 1, 0, 0, 1],
//     [0, 0, 0, 0, 0],
//   ],
// ];
// for (let i = 0; i < input.length; i++) {
//   console.log(solution(input[i]));
// }
function solution(board) {
  const N = board.length;
  const goal = N + '' + N;
  const queue = [[[1, 1], [1, 2], 0]];
  const visit = new Set(['1112']);

  const new_board = new Array(N + 2)
    .fill()
    .map((_) => new Array(N + 2).fill(1));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      new_board[i + 1][j + 1] = board[i][j];
    }
  }

  while (queue.length) {
    const [left, right, count] = queue.shift();

    if (left.join('') === goal || right.join('') === goal) return count;

    const nextPosition = getNextPosition(left, right, new_board);
    for (const next of nextPosition) {
      const [next_left, next_right] = next;
      const key = next_left.join('') + next_right.join('');
      if (!visit.has(key)) {
        queue.push([next_left, next_right, count + 1]);
        visit.add(key);
      }
    }
  }
}

const getNextPosition = (left, right, board) => {
  const result = [];
  const X = 1,
    Y = 0;
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const move of moves) {
    const [dy, dx] = move;
    const next_left = [left[Y] + dy, left[X] + dx];
    const next_right = [right[Y] + dy, right[X] + dx];

    if (
      board[next_left[Y]][next_left[X]] === 0 &&
      board[next_right[Y]][next_right[X]] === 0
    ) {
      result.push([next_left, next_right]);
    }
  }

  const toward = [-1, 1];

  if (left[Y] === right[Y]) {
    for (const dy of toward) {
      if (
        board[left[Y] + dy][left[X]] === 0 &&
        board[right[Y] + dy][right[X]] === 0
      ) {
        result.push([left, [left[Y] + dy, left[X]]]);
        result.push([[right[Y] + dy, right[X]], right]);
      }
    }
  } else {
    for (const dx of toward) {
      if (
        board[left[Y]][left[X] + dx] === 0 &&
        board[right[Y]][right[X] + dx] === 0
      ) {
        result.push([[left[Y], left[X] + dx], left]);
        result.push([right, [right[Y], right[X] + dx]]);
      }
    }
  }

  return result;
};
