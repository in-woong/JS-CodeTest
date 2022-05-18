function solution(routes) {
  //첫번째 부터 곂치는 것이 있으면 뺀다. 빼고 count++
  //두번째
  routes.sort((a, b) => a[0] - b[0]);
  let count = 0;
  while (routes.length !== 0) {
    let hasRoute = false;
    const element = routes.shift();
    let removeIndex = [];

    for (let i = 0; i < routes.length; i++) {
      if (element[0] <= routes[i][0] && routes[i][0] <= element[1]) {
        hasRoute = true;
        removeIndex.push(i);
      }
    }

    if (hasRoute) {
      routes = routes.filter((route, idx) => !removeIndex.includes(idx));
    }

    count++;
  }
  return count;
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
