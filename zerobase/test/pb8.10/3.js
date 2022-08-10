function solution(h, w) {
  const dir = [
    [0, 1],
    [1, 0],
  ];
  const queue = [[0, 0]];
  let count = 0;
  while (queue.length) {
    const [y, x] = queue.pop();
    if (y == h - 1 && x == w - 1) {
      count++;
      continue;
    }

    for (let i = 0; i < dir.length; i++) {
      const dirY = y + dir[i][0];
      const dirX = x + dir[i][1];

      if (dirY >= 0 && dirY < h && dirX >= 0 && dirX < w) {
        queue.push([dirY, dirX]);
      }
    }
  }
  return count;
}
