function ShortestPath() {
  this.edges = {};
}

ShortestPath.prototype.addVertex = function (vertex) {
  this.edges[vertex] = {};
};

ShortestPath.prototype.addEdge = function (srcVertex, dstVertex, weight) {
  this.edges[srcVertex][dstVertex] = weight;
};

ShortestPath.prototype._extractMin = function (queue, dist) {
  let minDistance = Number.POSITIVE_INFINITY;
  let minVertex = null;
  for (let vertex in queue) {
    if (dist[vertex] <= minDistance) {
      minDistance = dist[vertex];
      minVertex = vertex;
    }
  }
};

ShortestPath.prototype.dijkstra = function (start) {
  let queue = {};
  let dist = {};

  for (let vertex in this.edges) {
    dist[vertex] = Number.POSITIVE_INFINITY;
    queue[vertex] = this.edges[vertex];
  }

  dist[start] = 0;

  while (Object.keys(queue).length != 0) {
    let u = this._extractMin(queue, dist);

    delete queue[u];

    for (let neighbor in this.edges[u]) {
      let alt = dist[u] + this.edges[u][neighbor];
      if (alt < dist[neighbor]) dist[neighbor] = alt;
    }
  }
  for (let vertex in this.edges) {
    if (dist[vertex] === Number.POSITIVE_INFINITY) {
      delete dist[vertex];
    }
  }
  return dist;
};

let path = new ShortestPath();

path.addVertex('A');
path.addVertex('B');
path.addVertex('C');
path.addVertex('D');
path.addVertex('E');

path.addEdge('A', 'B', 10);
path.addEdge('A', 'C', 3);
path.addEdge('B', 'C', 1);
path.addEdge('B', 'D', 2);
path.addEdge('C', 'B', 4);
path.addEdge('C', 'D', 8);
path.addEdge('C', 'E', 2);
path.addEdge('D', 'E', 7);
path.addEdge('E', 'D', 9);

console.log(path);
console.log(path.dijkstra('A'));
