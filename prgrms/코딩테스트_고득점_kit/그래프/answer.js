const NotVisited = -1; 

function solution(n, edge) {
    let answer = 0;
    let start = 1; 
    let process = []; 
    let adjList = {}; 
    for(let [v1, v2] of edge) {
        adjList[v1] ? adjList[v1].push(v2) : adjList[v1] =[v2];  
        adjList[v2] ? adjList[v2].push(v1) : adjList[v2] =[v1]; 
    };

    let distance = [0]; 
    for(let i = 0; i < n; i++) {
        distance.push(NotVisited); 
    }

    distance[start] = 0; 
    process.push(start); 

    while(process.length) {
        let vertex = process.shift(); 
        let adj = adjList[vertex]; 
        for(let i of adj) {
            if(distance[i] === NotVisited) {
                distance[i] = distance[vertex] + 1; 
                process.push(i); 
            }
        }
    }

    let fardistance = Math.max(...distance); 
    distance.forEach((dist) => {
        if(dist === fardistance) {
            answer++; 
        }
    })

    return answer;
} 