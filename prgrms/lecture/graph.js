//인접행렬
const graph = Array.from(
    Array(5),
    ()=> Array(5).fill(false)
);

graph[0][1] = true;
graph[0][3] = true;
graph[1][2] = true;
graph[2][0] = true;
graph[2][4] = true;
graph[3][2] = true;
graph[4][0] = true;


//인접리스트

const listGraph = Array.from(
    Array(5),
    ()=>[]
);

listGraph[0].push(1);
listGraph[0].push(3);
listGraph[1].push(2);
listGraph[2].push(0);
listGraph[2].push(4);
listGraph[3].push(2);
listGraph[4].push(0);
console.log(listGraph)