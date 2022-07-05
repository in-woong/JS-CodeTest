/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
 var mostVisited = function(n, rounds) {
    const map = new Map();
    for(let i=1 ;i<=n; i++){
        map.set(i,0);
    }
    for(let i=0; i<rounds.length-1;i++){
        const start= rounds[i];
        const end = rounds[i+1];
        let num = start;
        while(num!==end){
            map.set(num,map.get(num)+1);
            num=(num+1)%n==0?n:(num+1)%n;
        }
    }
    const last = rounds[rounds.length-1];
    map.set(last,map.get(last)+1);
    const array=[...map.values()]
    let max=0;
    array.forEach(item=>{
        if(max<item){
            max=item;
        }
    })
    const answer=[];
    
    for(let i=0 ;i<array.length; i++){
        
        if(array[i]==max){
            
            answer.push(i+1);
        }
    }
    return answer
}