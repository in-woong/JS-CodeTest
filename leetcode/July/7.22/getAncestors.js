const getAncestors = (n, edges) => {
  const inEdges = Array.from({ length: n }, () => new Set());
  const outdegrees = new Uint16Array(n);
  const finished = new Uint8Array(n);
  const dfs = (idx) => {
    if (finished[idx]) return;
    if (inEdges[idx].size === 0) return;
    for (const edge of inEdges[idx]) {
      dfs(edge);
      inEdges[idx] = new Set([...inEdges[idx], ...inEdges[edge]]);
    }
    finished[idx] = 1;
  };

  for (const [from, to] of edges) {
    inEdges[to].add(from);
    ++outdegrees[from];
  }

  for (let i = 0; i < n; ++i) {
    outdegrees[i] == 0 && dfs(i);
  }

  return inEdges.map((set) => Array.from(set).sort((a, b) => a - b));
};

const input = [
  [
    8,
    [
      [0, 3],
      [0, 4],
      [1, 3],
      [2, 4],
      [2, 7],
      [3, 5],
      [3, 6],
      [3, 7],
      [4, 6],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${getAncestors(...input[i])}`);
}
