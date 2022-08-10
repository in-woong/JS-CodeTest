function solution(A) {
  const N = A.length;
  let max = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] == 1) continue;
      const temp = count(i, j);
      max = max < temp ? temp : max;
    }
  }

  function count(y, x) {
    const direction = [
      [1, -1],
      [1, 0],
      [1, 1],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    let answer = 0;
    for (let i = 0; i < direction.length; i++) {
      const dirY = y + direction[i][0];
      const dirX = x + direction[i][1];
      if (dirY >= 0 && dirY < N && dirX >= 0 && dirX < N && A[dirY][dirX] == 1)
        answer++;
    }
    return answer;
  }
  return max;
}
