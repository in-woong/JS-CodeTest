function solution(board) {
  const N = board.length;
  // DIRECTIONS 배열의 index가 실제 방향을 탐색하는데 쓰이는 값이다. 오/왼/위/아래 -> 0/1/2/3
  const DIRECTIONS = [
    //위
    [1, 0],
    //아래
    [-1, 0],
    //좌
    [0, -1],
    //우
    [0, 1],
  ];
  const dp = Array(N)
    .fill()
    .map(() =>
      Array(N)
        .fill()
        .map(() => Array(4).fill(Infinity))
    );

  const isValid = (y, x) =>
    y >= 0 && y < N && x >= 0 && x < N && board[y][x] !== 1;
  // 초기값은 0,0에서 오른쪽 / 아래로 이동하는 경우만 지정한다.
  const queue = [
    [0, 0, 0, 1],
    [0, 0, 0, 3],
  ];

  // queue를 사용한 bfs를 수행한다.
  while (queue.length) {
    const [y, x, cost, dir] = queue.shift();
    DIRECTIONS.forEach(([dy, dx], i) => {
      const [dirY, dirX] = [y + dy, x + dx];
      if (isValid(dirY, dirX)) {
        let new_cost = cost + 100;
        // 진행하는 방향과 다른 방향은 회전하는 방향이다.
        if (dir !== i) new_cost += 500;
        // 되돌아가는 방향의 cost는 무조건 new_cost보다 작기때문에 왔던 방향은 이조건에서 제외된다.
        if (new_cost < dp[dirY][dirX][i]) {
          dp[dirY][dirX][i] = new_cost;
          queue.push([dirY, dirX, new_cost, i]);
        }
      }
    });
  }
  return Math.min(...dp[N - 1][N - 1]);
}
console.log(
  solution([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
);
