function solution(points) {
  const x1 = points[0];
  const y1 = points[1];
  const x2 = points[2];
  const y2 = points[3];
  const x3 = points[4];
  const y3 = points[5];

  if ((x2 - x1) / (y2 - y1) == x3 / y3) return 0;
  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3));
}

const input = [[0, 0, 0, 5, 5, 0]];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
