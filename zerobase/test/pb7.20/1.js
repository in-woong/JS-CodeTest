function solution(r, c, maps) {
  let min = 2;

  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[0].length; j++) {
      if (maps[i][j] == 'Y' && i == r - 1 && j == c - 1)
        min = min > 0 ? 0 : min;
      if (maps[i][j] == 'Y' && (i == r - 1 || j == c - 1))
        min = min > 1 ? 1 : min;
    }
  }

  return min;
}

const input = [
  [
    1,
    1,
    [
      ['G', 'G', 'G'],
      ['G', 'G', 'Y'],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
