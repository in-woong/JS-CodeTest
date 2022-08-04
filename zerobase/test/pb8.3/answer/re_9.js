function solution(n, graph) {
  return new Array(n).fill(0).map((_, idx) => bfs(n, idx, graph));
}

function bfs(n, start, graph) {
  console.log('bfs');
  let que = [];
  let que_front = 0;

  let dist = new Array(n).fill(-1);

  que.push(start);
  dist[start] = 0;

  while (que_front < que.length) {
    console.log('que', que);
    let here = que[que_front];
    que_front += 1;

    for (let i = 0; i < n; i++) {
      if (graph[here][i] === 0 || dist[i] !== -1) {
        continue;
      }
      //i는 친구거나, dist[i]==-1일때 넘어온다.

      dist[i] = dist[here] + 1;
      if (dist[i] < 2) {
        que.push(i);
      }
    }
    console.log(dist);
  }
  return dist.filter((it) => it === 2).length;
}

console.log(
  solution(10, [
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
  ])
);
