function solution(rows, columns, queries) {
  const array = Array.from({ length: rows }, () => new Array(columns).fill(0));

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < columns; x += 1) {
      array[y][x] = y * columns + x + 1;
    }
  }
  const minArray = [];
  for (const query of queries) {
    const [y1, x1, y2, x2] = query;
    const result = [];
    let temp1 = array[y1][x1 - 1];
    let temp2;

    for (let i = x1 - 1; i < x2; i += 1) {
      temp2 = array[y1 - 1][i];
      array[y1 - 1][i] = temp1;
      temp1 = temp2;
      result.push(temp2);
    }

    for (let i = y1; i < y2; i += 1) {
      temp2 = array[i][x2 - 1];
      array[i][x2 - 1] = temp1;
      temp1 = temp2;
      result.push(temp2);
    }
    for (let i = x2 - 2; i >= x1 - 1; i -= 1) {
      temp2 = array[y2 - 1][i];
      array[y2 - 1][i] = temp1;
      temp1 = temp2;
      result.push(temp2);
    }
    for (let i = y2 - 2; i > y1 - 1; i -= 1) {
      temp2 = array[i][x1 - 1];
      array[i][x1 - 1] = temp1;
      temp1 = temp2;
      result.push(temp2);
    }
    minArray.push(Math.min(...result));
  }

  return minArray;
}
