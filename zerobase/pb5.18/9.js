const direction = [
  [1, 0],
  [-1, 0],
  [0, -1],
  [0, 1],
];
function solution(A) {
  const visit = Array.from({ length: A.length }, () =>
    Array.from({ length: A[0].length }).fill(false)
  );
  const M = A.length;
  const N = A[0].length;
  const queue = [];
  queue.push([0, 0]);
  while (queue.length != 0) {
    const [y, x] = queue.pop();
    
    if (y == M - 1 && x == N - 1) return 1;
    visit[y][x] = true;

    for (let i = 0; i < direction.length; i++) {
      const [dy, dx] = direction[i];
      const dirX = x + dx;
      const dirY = y + dy;
      if (
        0 <= dirX &&
        dirX < N &&
        0 <= dirY &&
        dirY < M &&
        visit[dirY][dirX] == false &&
        A[dirY][dirX] == 1
      ) {
        queue.push([dirY, dirX]);
      }
    }
  }
  return 0;
}

const input = [
  [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 1, 1, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
