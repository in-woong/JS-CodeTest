function solution(array, p) {
    let answer=0;
    for(let i=0 ;i<array.length;i++){
        const index= array[i].indexOf(p);
        if(index==0)answer++;
        
    }
    
    return answer;
}