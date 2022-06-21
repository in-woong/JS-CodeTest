function solution(points) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const temp = area(points[i], points[j], points[k]);
        max = max < temp ? temp : max;
      }
    }
  }
  return max.toFixed(5);
}

function area(a, b, c) {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  const sum = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);
  const result = Math.abs(sum) / 2;
  return result;
}

const input = [
  [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, 2],
    [2, 0],
  ],
  [
    [1, 0],
    [0, 0],
    [0, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
