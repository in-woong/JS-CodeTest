function dfs(A, stack, visited, dx, dy) {
  let x = stack[stack.length - 1][0];
  let y = stack[stack.length - 1][1];
  for (let i = 0; i < dx.length; i++) {
    let new_X = x + dx[i];
    let new_Y = y + dy[i];

    if (
      new_X >= 0 &&
      new_X < A.length &&
      new_Y >= 0 &&
      new_Y < A[0].length &&
      visited[new_X][new_Y] == 0
    ) {
      if (A[new_X][new_Y] == 0) {
        continue;
      }
      if (new_X == A.length - 1 && new_Y == A[0].length - 1) {
        return 1;
      }
      if (visited[new_X][new_Y] == 1) {
        continue;
      }

      stack.push([new_X, new_Y]);
      visited[new_X][new_Y] = 1;
      retValue = dfs(A, stack, visited, dx, dy);
      if (retValue == 1) {
        return 1;
      }
    }
  }
  return 0;
}

function solution(A) {
  let M = A.length;
  let N = A[0].length;
  var visited = new Array(N);
  for (let i = 0; i < M; i++) {
    visited[i] = new Array(N);
    visited[i].fill(0);
  }
  visited[0][0] = 1;
  let stack = [[0, 0]];
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  return dfs(A, stack, visited, dx, dy);
}
const input = [
  [1, 1, 1, 1],
  [0, 0, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 0],
  [0, 0, 1, 1],
];

console.log(`${1} ${solution(input)}`);
