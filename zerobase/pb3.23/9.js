function solution(points) {
  const x = [];
  const y = [];
  points.forEach((point, index) => {
    if (index % 2) {
      y.push(point);
    } else {
      x.push(point);
    }
  });
  if (
    (x[0] == x[1] && y[0] == y[1]) ||
    (x[0] == x[2] && y[0] == y[2]) ||
    (x[1] == x[2] && y[1] == y[2])
  )
    return 0;
  if ((x[1] - x[0]) / (y[1] - y[0]) == (x[2] - x[1]) / (y[2] - y[1])) return 0;

  const result = Math.abs(
    x[0] * y[1] +
      x[1] * y[2] +
      x[2] * y[0] -
      x[1] * y[0] -
      x[2] * y[1] -
      x[0] * y[2]
  );
  return result;
}

console.log(solution([-4, -4, 3, 3, 4, 3]));
