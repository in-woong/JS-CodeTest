//N개의 방 M개의 일방통행 , S는 시작

function solution(n, m, s, maps) {
  //하나의 길을 찾고,
  // 다음 길이 가는 동안 첫번째와 곂치는 것이 없는 지 확인
  // 다음 길이 둘 중에 곂치는 길이 없는 지 확인하면서 간다.
  // 곂치는 길이 있으면 return "YES"
  s = s - 1;
  const edges = [];

  for (let idx = 0; idx < m; idx++) {
    const [u, v] = maps[idx];

    edges.push([u - 1, v - 1]);
  }

  let map = new Map();
  const g = Array.from(
    {
      length: n,
    },
    () => []
  );
  for (let [u, v] of edges) {
    g[u].push(v);
  }
  console.log(g, s);
  for (let child of g[s]) {
    console.log(child);
    let tmp = new Map([[child, s]]);

    const queue = [child];
    console.log(tmp, queue);
    for (let node of queue) {
      console.log('map', map, queue, node);
      if (map.has(node)) {
        return 'YES';
      }

      for (let c of g[node]) {
        console.log('c', c, 'tmp', tmp);
        if (c === s) continue;
        if (tmp.has(c)) continue;
        tmp.set(c, node);
        queue.push(c);
      }
    }
    for (let [child, node] of tmp) {
      map.set(child, node);
    }
  }
  return 'NO';
}

const input = [
  [
    5,
    5,
    1,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [2, 5],
      [5, 4],
    ],
  ],
  [
    3,
    3,
    2,
    [
      [1, 2],
      [2, 3],
      [3, 1],
    ],
  ],
  [
    5,
    5,
    1,
    [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [1, 5],
    ],
  ],
  [2, 0, 2, []],
  [
    3,
    5,
    1,
    [
      [1, 3],
      [1, 2],
      [2, 3],
      [3, 1],
      [3, 2],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(
    `${i + 1}: ${solution(input[i][0], input[i][1], input[i][2], input[i][3])}`
  );
}
