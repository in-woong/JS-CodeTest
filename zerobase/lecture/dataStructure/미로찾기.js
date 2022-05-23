function answer(a) {
  let array = Array.from(Array(a.length), () => []);
  let visit = Array.from(Array(a.length), () => Array(a.length).fill(false));
  console.log(visit);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      array[i].push(a[i].split('')[j]);
    }
    let q = [];
    let nx, ny;
    let n = a.length;
    let count = 0;
    let d = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    q.push([4, 0]);
    while (q.length > 0) {
      const [x, y] = q.pop();
      count++;
      if (x == end[0] && y == end[1]) {
        return count;
      }
      for (let i = 0; i < 4; i++) {
        nx = x + d[i][0];
        ny = y + d[i][1];
        if (
          0 <= nx &&
          nx < n &&
          0 <= ny &&
          ny < n &&
          visit[nx][ny] == false &&
          a[nx][ny] == 0
        ) {
          visit[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }

  return true;
}

let input = [
  ['00110', '00010', '00110', '00000', '01011'],
  ['00110', '00010', '00010', '01011'],
  [
    '1111111100',
    '1111111101',
    '1111111101',
    '1000111101',
    '1010111101',
    '1010011101',
    '1011011101',
    '1011011101',
    '1011000001',
    '0011111111',
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
