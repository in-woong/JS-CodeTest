// function solution(board, moves) {
//   let count = 0;
//   const n = board.length;
//   const queue = [];
//   while (moves.length !== 0) {
//     const number = moves.shift() - 1;
//     for (let i = 0; i < n; i++) {
//       if (board[i][number] !== 0) {
//         queue.push(board[i][number]);
//         board[i][number] = 0;
//         break;
//       }
//     }
//     if (queue.length >= 2) {
//       if (queue[queue.length - 1] == queue[queue.length - 2]) {
//         queue.pop();
//         queue.pop();
//         count += 2;
//       }
//     }
//   }
//   return count;
// }
function transpose(matrix) {
  return matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );
}

function solution(board, moves) {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );

  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;

    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }
  return result;
}

const input = [
  [
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
