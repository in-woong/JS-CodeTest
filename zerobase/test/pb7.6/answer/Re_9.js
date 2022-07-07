// function solution(n, graph) {
//   return new Array(n).fill(0).map((_, idx) => bfs(n, idx, graph));
// }

// function bfs(n, start, graph) {
//   let que = [];
//   let que_front = 0;
//   let dist = new Array(n).fill(-1);

//   que.push(start);
//   dist[start] = 0;
//   while (que_front < que.length) {
//     let here = que[que_front];
//     que_front += 1;

//     for (let i = 0; i < n; i++) {
//       if (graph[here][i] === 0 || dist[i] !== -1) {
//         continue;
//       }
//       dist[i] = dist[here] + 1;
//       if (dist[i] < 2) {
//         que.push(i);
//       }
//     }
//   }
//   return dist.filter((it) => it === 2).length;
// }

function solution(n, graph) {
  const result = [];
  for (let i = 0; i < graph.length; i++) {
    let recommended = 0;
    const visited = Array.from({ length: n }).fill(false);
    visited[i] = true;
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] === 1) {
        visited[j] = true;
      }
    }
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] === 1 && j !== i) {
        graph[j].map((element, index) => {
          if (element === 1 && visited[index] === false) {
            visited[index] = true;
            recommended += 1;
          }
        });
      }
    }
    result.push(recommended);
  }
  return result;
}

const input = [
  [
    10,
    [
      [0, 1, 1, 0, 1, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 1, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
      [1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 0, 1, 0],
      [1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    ],
  ],
  [
    8,
    [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 0, 0],
      [1, 1, 1, 0, 1, 0, 0, 0],
    ],
  ],
  [
    3,
    [
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0],
    ],
  ],
  [
    6,
    [
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ],
  ],
  [
    4,
    [
      [0, 0, 1, 0],
      [0, 0, 1, 1],
      [1, 1, 0, 1],
      [0, 1, 1, 0],
    ],
  ],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
