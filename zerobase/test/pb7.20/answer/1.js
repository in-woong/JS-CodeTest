function solution(r, c, maps) {
  let answer = 0;
  let columnStr = '';

  for (let i = 0; i < maps.length; i++) {
    columnStr += maps[i][c - 1];
  }

  if (maps[r - 1][c - 1] === 'Y') {
    answer = 0;
  } else if (maps[r - 1].includes('Y')) {
    answer = 1;
  } else if (columnStr.includes('Y')) {
    answer = 1;
  } else if (maps.join('').includes('Y')) {
    answer = 2;
  }
}
