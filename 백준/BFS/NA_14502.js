//첫째줄 세로 N, 가로 M
//둘째줄부터 N개의 줄에 지도의 모양이 주어진다 0은 빈칸 1은 벽, 2는 바이러스 2는 2보다 크거나 같고, 10보다 작거나 같다.
//빈칸은 3개이상이다.
//첫째줄에 얻을 수 있는 안전영역의 최대 크기를 출력

//input을 받은 뒤 

//벽을세운다 어디든지
//바이러스를 퍼뜨린다
//안전영역의 개수를 찾는다

function virus(x, y) {
    for (let i = 0; i < 4; i++) {
        let nx = parseInt(x) + dx;
        let ny = parseInt(y) + dy;
        if (graph[nx][ny] === 0) {
            graph[nx][ny] = 2;
            virus(nx, ny)
        }
    }
}

function get_score() {
    let score = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (temp[i][j] == 0) {
                score += 1
            }
        }
    }
    return score;
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let graph = [];
let temp = [];
let count = 0;

const fs = require("fs");
const input = fs.readFileSync("./data").toString().trim().split("\n");
const [n, m] = input.shift().split(" ").map(v => v * 1);
graph = new Array(Array(n + 1), () => Array(n + 1).fill(0));

for (let i = 1; i <= n; i++) {
    graph[i] = input.shift().split(" ").map(v => v * 1);
    graph[i].unshift(0);
}

function dfs(count) {
    if (count == 3) {
        temp = graph.slice(0);
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (temp[i][j] == 2) {
                    virus(i, j)
                }
            }
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (graph[i][j] == 0) {
                graph[i][j] = 1;
                count += 1;
                dfs(count);
                graph[i][j] = 0;
                count -= i;
            }
        }
    }

}

dfs(0);
let result = get_score();

console.log(result);