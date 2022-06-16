// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

function solution(coordinates) {
  let incline;
  for (let i = 1; i < coordinates.length; i++) {
    if (i == 1) {
      const [x1, y1] = coordinates[0];
      const [x2, y2] = coordinates[1];
      if (x2 - x1 == 0 || y2 - y1 == 0) incline = 0;
      else {
        incline = (x2 - x1) / (y2 - y1);
      }
    } else {
      const [x1, y1] = coordinates[i - 1];
      const [x2, y2] = coordinates[i];
      let newIncline;
      if (x2 - x1 == 0 || y2 - y1 == 0) {
        newIncline = 0;
      } else {
        newIncline = (x2 - x1) / (y2 - y1);
      }
      console.log(incline, newIncline);
      if (incline !== newIncline) return false;
    }
  }
  return true;
}

const input = [
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ],
  [
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ],

  [
    [-3, -2],
    [-1, -2],
    [2, -2],
    [-2, -2],
    [0, -2],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
