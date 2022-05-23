//1은 이동할 수 있는 칸, 0은 이동할 수 없는 칸을 나타낸다.
//(1,1)에서 출발하여 (N,M)의 위치로 이동해야할 때 지나야 하는 최소의 칸 수는?
// const fs = require("fs");
// const input = fs.readFileSync("./data").toString().trim().split("\n");
// const [n, m] = input.shift().split(" ").map(v => v * 1);

// let graph = new Array(Array(n + 1), () => Array(n + 1).fill(0));
// for (let i = 1; i <= n; i++) {
//     graph[i] = input.shift().split("").map(v => v * 1);
//     graph[i].unshift(0);
// }

// let stack = [];
// let count = 0;
// let visited = new Array(n + 1).fill(Array(m + 1).fill(false));

// const dx = [-1, 0, 1, 0];
// const dy = [0, 1, 0, -1];
// let nx = 0;
// let ny = 0;

// function dfs(x, y) {

//     stack.push([x, y]);
//     visited[x][y] = true;

//     for (let i = 0; i < 4; i++) {
//         nx = x + dx[i];
//         ny = x + dy[i];
//         console.log(nx, ny, n ,m);
//         if (nx >= 0 && nx <= n && ny >= 0 && ny <= m) {
//             if (graph[nx][ny] == 1 && visited[nx][ny] == false) {
//                 count += 1;
//                 dfs(nx, ny);
//                 console.log("stack");
//             }
//         }

//     }
//     return;

// }

// dfs(0, 0);


const input = require("fs").readFileSync("./data").toString().trim().split("\n");
const [yMax, xMax] = input.shift().split(" ");
const map = input.map(v => v.split("").map(x => x * 1));

const stack = [[0, 0, 0]];

const dir = [
    [0, 1], [0, -1], [1, 0], [-1, 0]
];

while (stack.length) {
    const [x, y, dis] = stack.shift();
    for (let i = 0; i < 4; i++) {
        const xPos = x + dir[i][0];
        const yPos = y + dir[i][1];
        if (0 <= xPos && 0 <= yPos && xPos < xMax && yPos < yMax) {
            if (map[yPos][xPos] === 1) {
                map[yPos][xPos] = dis + 2;
                stack.push([xPos, yPos, dis + 1]);
            }
        }
    }
}

console.log(map[yMax-1][xMax-1])