const direction = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];

function solution(n, computers) {
  let visited = Array.from({ length: n }, () => 0);
  let count = 0;

  //2ㅂ
  for (let i = 0; i < n; i++) {
    //1번째 컴퓨터에대해서 이루어진 네트워크 확인 count ++
    if (visited[i] == 0) {
      count++;
      const queue = [];
      queue.push(i);
      while (queue.length !== 0) {
        const checkComputer = queue.shift();
        visited[checkComputer] = 1;
        for (let newComputer = 0; newComputer < n; newComputer++) {
          if (
            visited[newComputer] == 0 &&
            computers[checkComputer][newComputer] == 1
          ) {
            queue.push(newComputer);
          }
        }
      }
    }
  }
  return count;
}
const input = [
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
  ],
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
  ],
  [
    3,
    [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
  ],
  [
    4,
    [
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [1, 0, 1, 1],
    ],
  ],
  [
    4,
    [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
