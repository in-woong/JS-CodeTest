// /**
//  * @param {number[][]} heights
//  * @return {number[][]}
//  */
// var pacificAtlantic = function (heights) {
//   const maxY = heights.length;
//   const maxX = heights[0].length;
//   const dp = Array.from({ length: heights.length }, () =>
//     Array.from({ length: heights[0].length }, () => [])
//   );

//   for (let i = 0; i < maxY; i++) {
//     for (let j = 0; j < maxX; j++) {
//       if (i == 0 || j == 0) dp[i][j].push('P');
//       if (i == maxY - 1 || j == maxX - 1) dp[i][j].push('A');
//     }
//   }

//   for (let i = 0; i < maxY; i++) {
//     for (let j = 0; j < maxX; j++) {
//       count([i, j]);
//     }
//   }

//   function count([a, b]) {
//     let count = 0;
//     const stack = [[a, b]];
//     const visited = Array.from({ length: heights.length }, () =>
//       Array.from({ length: heights[0].length }, () => false)
//     );
//     const temp = new Set();
//     const dir = [
//       [1, 0],
//       [-1, 0],
//       [0, -1],
//       [0, 1],
//     ];
//     while (stack.length) {
//       count++;
//       const element = stack.pop();

//       visited[element[0]][element[1]] = true;

//       if (
//         dp[element[0]][element[1]].includes('P') &&
//         dp[element[0]][element[1]].includes('A')
//       ) {
//         temp.add('A');
//         temp.add('P');
//         dp[a][b] = Array.from(temp);
//         return;
//       }
//       if (dp[element[0]][element[1]].includes('P')) {
//         temp.add('P');
//       }
//       if (dp[element[0]][element[1]].includes('A')) {
//         temp.add('A');
//       }
//       for (let i = 0; i < dir.length; i++) {
//         const dirY = element[0] + dir[i][0];
//         const dirX = element[1] + dir[i][1];

//         if (
//           dirY >= 0 &&
//           dirY < maxY &&
//           dirX >= 0 &&
//           dirX < maxX &&
//           visited[dirY][dirX] == false &&
//           heights[dirY][dirX] <= heights[element[0]][element[1]]
//         ) {
//           stack.push([dirY, dirX]);
//         }
//       }
//     }
//     dp[a][b] = Array.from(temp);
//   }
//   const answer = [];
//   for (let i = 0; i < dp.length; i++) {
//     for (let j = 0; j < dp[0].length; j++) {
//       if (dp[i][j].length == 2) answer.push([i, j]);
//     }
//   }
//   return answer;
// };
// const input = [
//   [
//     [1, 2, 2, 3, 5],
//     [3, 2, 3, 4, 4],
//     [2, 4, 5, 3, 1],
//     [6, 7, 1, 4, 5],
//     [5, 1, 1, 2, 4],
//   ],
//   [
//     [2, 1],
//     [1, 2],
//   ],
// ];

// for (let i = 0; i < input.length; i++) {
//   console.log(`${i + 1}: ${pacificAtlantic(input[i])}`);
// }

function pacificAtlantic(matrix) {
  if (!matrix.length) {
    return [];
  }
  let pacific = make(matrix);
  let atlantic = make(matrix);
  console.log(pacific, atlantic);
  for (let row = 0; row < matrix.length; row++) {
    bfs(row, 0, pacific, matrix);
    bfs(row, matrix[0].length - 1, atlantic, matrix);
  }
  for (let col = 0; col < matrix[0].length; col++) {
    bfs(0, col, pacific, matrix);
    bfs(matrix.length - 1, col, atlantic, matrix);
  }
  return union(atlantic, pacific);
}

const make = (matrix) =>
  new Array(matrix.length)
    .fill()
    .map((row) => new Array(matrix[0].length).fill(false));

function bfs(x, y, ocean, matrix) {
  let q = [[x, y]];
  ocean[x][y] = true;
  while (q.length) {
    let [i, j] = q.shift();
    for (let [newI, newJ] of [
      [i, j + 1],
      [i + 1, j],
      [i, j - 1],
      [i - 1, j],
    ]) {
      if (
        newI >= 0 &&
        newI < ocean.length &&
        newJ >= 0 &&
        newJ < ocean[0].length
      ) {
        if (matrix[i][j] <= matrix[newI][newJ] && !ocean[newI][newJ]) {
          q.push([newI, newJ]);
          ocean[newI][newJ] = true;
        }
      }
    }
  }
}

function union(atlantic, pacific) {
  let union = [];
  for (let i = 0; i < atlantic.length; i++) {
    for (let j = 0; j < atlantic[0].length; j++) {
      if (atlantic[i][j] && pacific[i][j]) {
        union.push([i, j]);
      }
    }
  }
  return union;
}
