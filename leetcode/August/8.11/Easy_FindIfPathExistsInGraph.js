/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const map = new Map();
  const visited = Array.from({ length: n }, () => false);
  for (let i = 0; i < edges.length; i++) {
    if (map.get(edges[i][0])) {
      map.set(
        edges[i][0],
        [...map.get(edges[i][0]), edges[i][1]].sort((a, b) => a - b)
      );
    } else {
      map.set(edges[i][0], [edges[i][1]]);
    }
    if (map.get(edges[i][1])) {
      map.set(
        edges[i][1],
        [...map.get(edges[i][1]), edges[i][0]].sort((a, b) => a - b)
      );
    } else {
      map.set(edges[i][1], [edges[i][0]]);
    }
  }
  const queue = [source];
  while (queue.length) {
    const element = queue.pop();
    if (element == destination) return true;
    visited[element] = true;
    const tempArray = map.get(element);
    for (let i = 0; i < tempArray.length; i++) {
      if (!visited[tempArray[i]]) {
        queue.push(tempArray[i]);
      }
    }
  }
  return false;
};
