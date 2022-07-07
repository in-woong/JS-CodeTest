function solution(n, graph) {
  return new Array(n).fill(0).map((_, idx) => bfs(n, idx, graph));
}

function bfs(n, start, graph) {
  let que = [];
  let que_front = 0;
  let dist = new Array(n).fill(-1);

  que.push(start);
  dist[start] = 0;
  while (que_front < que.length) {
    let here = que[que_front];
    que_front += 1;

    for (let i = 0; i < n; i++) {
      if (graph[here][i] === 0 || dist[i] !== -1) {
        countinue;
      }
      dist[i] = dist[here] + 1;
      if (dist[i] < 2) {
        que.push(i);
      }
    }
  }
  return dist.filter((it) => it === 2).length;
}
