const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  solution(input.slice());
  process.exit();
});

function solution(input) {
  const N = Number(input[0][0]);
  const graph = input
    .slice(1)
    .map((line) => line.toString().split('').map(Number));

  const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const isVisited = Array.from({ length: N }, () => new Array(N).fill(false));
  const isValid = (y, x) => {
    return (
      y >= 0 &&
      y < N &&
      x >= 0 &&
      x < N &&
      !isVisited[y][x] &&
      graph[y][x] === 1
    );
  };

  let blockCnt = 0;
  let answer = [];
  let cntArray = [];
  let cnt = 0;

  const dfs = (y, x) => {
    isVisited[y][x] = true;
    cnt += 1;
    cntArray.push(cnt);
    for (let i = 0; i < 4; i += 1) {
      const [dy, dx] = dir[i];

      const dirY = dy + y;
      const dirX = dx + x;

      if (isValid(dirY, dirX)) {
        dfs(dirY, dirX);
      }
    }
  };

  for (let y = 0; y < N; y += 1) {
    for (let x = 0; x < N; x += 1) {
      if (isValid(y, x)) {
        blockCnt += 1;
        cnt = 0;
        dfs(y, x);
        answer.push(Math.max(...cntArray));
        cntArray = [];
      }
    }
  }
  console.log(blockCnt);
  const result = answer.sort((a, b) => a - b);
  for (let i = 0; i < result.length; i += 1) {
    console.log(result[i]);
  }
}
