function solution(routes) {
  //먼저 빠져나가는 순서대로 정렬
  let result = 0;
  routes.sort((a, b) => b[1] - a[1]);
  while (routes.length) {
    let route = routes.pop();
    const camera = route[1];
    result++;
    routes = routes.filter(
      (route) => !(route[0] <= camera && camera <= route[1])
    );
  }

  return result;
}
const input = [
  [
    [-2, -1],
    [1, 2],
    [-3, 0],
  ],
  [[0, 0]],
  [
    [0, 1],
    [0, 1],
    [1, 2],
  ],
  [
    [0, 1],
    [2, 3],
    [4, 5],
    [6, 7],
  ],
  [
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ],
  [
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ],
  [
    [-20, 15],
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
