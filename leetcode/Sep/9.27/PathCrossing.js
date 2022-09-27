/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const dir = { N: [0, 1], S: [0, -1], E: [1, 0], W: [-1, 0] };
  let now = [0, 0];
  const visited = new Set();
  visited.add(`${now[0]}#${now[1]}`);

  for (let i = 0; i < path.length; i++) {
    const p = path[i];
    const [x, y] = now;
    const [dx, dy] = dir[p];
    const next = [x + dx, y + dy];

    if (visited.has(`${next[0]}#${next[1]}`)) {
      return true;
    }

    visited.add(`${next[0]}#${next[1]}`);
    now = next;
    console.log(now);
  }
  return false;
};
