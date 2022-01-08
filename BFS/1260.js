// 첫째줄에 정점의 개수 N, 간선의 개수 M, 정점의 번호 V가 주어진다. 
//다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.
//입력으로 주어지는 간선은 양방향이다.
//첫째줄에 DFS를 수행한 결과를 ,그 다음줄에 BFS를 수행한 결과를 출력

//DFS
//깊이 스택을 이용 FILO

const fs = require('fs');
let input = fs.readFileSync("./data").toString().trim().split("\n")

let graph = [];
let visited = [];
let visited2 = [];
let DFS_graph = [];
let BFS_graph = [];
const [n, m, v] = input.shift().split(" ").map(v => v * 1);
graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

for (let i of input) {
    let [x, y] = i.split(" ").map(v => v * 1);
    graph[x][y] = 1;
    graph[y][x] = 1;
}

function DFS(number) {
    visited[number] = true;
    DFS_graph.push(number);
    for (let i = 1; i < graph.length; i++) {
        if (graph[number][i] === 1 && visited[i] === false) {
            DFS(i);
        }
    }
}

function BFS(number) {
    let deque = [];
    deque.push(number);
    BFS_graph.push(number);

    while (deque.length !== 0) {
        let data = deque.shift();
        visited2[data] = true;
        for (let i = 1; i < graph.length; i++) {
            if (graph[data][i] === 1 && visited2[i] === false) {
                visited2[i] = true;
                deque.push(i);
                BFS_graph.push(i);

            }
        }
    }
    return
}
visited = new Array(n + 1).fill(false);
visited2 = new Array(n + 1).fill(false);
DFS(v);
BFS(v);

console.log(DFS_graph.join(" "));
console.log(BFS_graph.join(" "));
