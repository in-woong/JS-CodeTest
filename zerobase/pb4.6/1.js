function solution(A, B) {
    let resultA=[]
    let resultB=[]
    let count=0;
    const stringA = A.toString(2).split("")
    stringA.forEach(a=>resultA.unshift(a));
    const stringB = B.toString(2).split("");
    stringB.forEach(b=>resultB.unshift(b))
    
    const max = Math.max(resultA.length, resultB.length);
    for(let i =0; i<max; i++){
        if(resultA[i]!==resultB[i])count++;
    }

    
    
    return count
}