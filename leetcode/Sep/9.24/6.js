//DFS로 풀되 K보다 커지면 끝,
function solution(n, m, x, y, r, c, k) {
  const array = Array.from({ length: n }, () => new Array(m).fill('.'));
  array[r - 1][c - 1] = 'end';

  const queue = [[x - 1, y - 1, '', 0]];

  const answer = [];
  //상하좌우
  const dir = [
    [-1, 0, 'u'],
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
  ];
  while (queue.length) {
    const el = queue.shift();

    const [y, x, value, dk] = el;

    if (array[y][x] == 'end' && dk == k) answer.push(value);

    for (let i = 0; i < dir.length; i++) {
      const [dy, dx, dvalue] = dir[i];
      const dirY = y + dy;
      const dirX = x + dx;
      const dirVal = value + dvalue;
      const dirK = dk + 1;
      if (0 <= dirY && dirY < n && 0 <= dirX && dirX < m && dirK <= k) {
        queue.push([dirY, dirX, dirVal, dirK]);
      }
    }
  }
  if (answer.sort()[0]) {
    return answer.sort()[0];
  } else {
    return 'impossible';
  }
}
