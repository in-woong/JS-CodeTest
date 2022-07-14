/**
 * @param {int} n
 * @param {array} colors
 * @param {array} edges
 * @return {array}
 */
function solution(n, colors, edges) {
  colors.unshift(0);
  let adj = new Array(n + 1);
  for (let i = 0; i < adj.length; ++i) {
    adj[i] = [];
  }
  for (let i = 0; i < n - 1; i++) {
    let a = edges[i][0];
    let b = edges[i][1];
    adj[a].push(b);
    adj[b].push(a);
  }

  queue = [];
  queue.push(1);
  let seen = new Array(n + 1);
  let par = new Array(n + 1);
  let child = new Array(n + 1);
  for (let i = 0; i < seen.length; ++i) {
    seen[i] = -1;
    par[i] = 0;
    child[i] = [];
  }
  seen[1] = 0;
  let seq = [];

  while (queue.length) {
    let v = queue.shift();
    seq.push(v);
    for (let u of adj[v]) {
      if (seen[u] === -1) {
        seen[u] = seen[v] + 1;
        par[u] = v;
        child[v].push(u);
        queue.push(u);
      }
    }
  }
  seq.reverse();

  let cnt = [];
  let cnt_size = new Array(n + 1);
  let dom_num = new Array(n + 1);
  let answer = [];
  for (let i = 0; i < n + 1; i++) {
    let tmp = {};
    tmp[colors[i]] = 1;
    cnt.push(tmp);
    cnt_size[i] = 1;
    dom_num[i] = 1;
    answer.push(colors[i]);
  }

  for (let v of seq) {
    let big = cnt[v];
    let size_big = cnt_size[v];

    for (let u of child[v]) {
      small = cnt[u];
      size_small = cnt_size[u];

      if (size_big < size_small) {
        let tmp;
        tmp = small;
        small = big;
        big = tmp;

        dom_num[v] = dom_num[u];
        answer[v] = answer[u];
      }

      size_big += size_small;
      for (let c of Object.keys(small)) {
        if (!Object.keys(big).includes(c)) {
          big[c] = small[c];
        } else {
          big[c] += small[c];
        }
        cnt_size[v] += small[c];
        if (big[c] > dom_num[v]) {
          dom_num[v] = big[c];
          answer[v] = parseInt(c);
        } else if (big[c] == dom_num[v]) {
          answer[v] += parseInt(c);
        }
      }
    }
    cnt_size[v] = size_big;
    cnt[v] = big;
  }

  return answer.slice(1);
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
