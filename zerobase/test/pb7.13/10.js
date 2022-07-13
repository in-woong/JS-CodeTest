function solution(n, colors, edges) {
  const nArray = [];
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
    nArray.push(i);
  }
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    map.set(a, [...map.get(a), b]);
  }

  const answer = [];

  for (let i = 1; i <= n; i++) {
    let sum = new Map();
    sum.set(colors[i - 1], 1);

    let node = map.get(i);
    while (node.length) {
      const item = node.pop();
      if (sum.has(colors[item - 1])) {
        sum.set(colors[item - 1], Number(sum.get(colors[item - 1]) + 1));
      } else {
        sum.set(colors[item - 1], 1);
      }

      if (map.get(item).length) {
        node.push(...map.get(item));
      }
    }
    const max = Math.max(...sum.values());
    let count = 0;
    for (const a of sum) {
      if (a[1] == max) {
        count += a[0];
      }
    }
    answer.push(count);
  }

  return answer;
}
const input = [
  [
    4,
    [1, 2, 3, 4],
    [
      [1, 2],
      [2, 3],
      [2, 4],
    ],
  ],
  [
    5,
    [2, 4, 3, 1, 2],
    [
      [1, 2],
      [1, 3],
      [1, 4],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(...input[i])}`);
}
