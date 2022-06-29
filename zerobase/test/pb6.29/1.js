function solution(N, dices) {
    let zero=0;
    let base=0;
    for(let i=0; i<N;i++){
        const [a,b]=dices[i]
        if(a>b)zero++;
        if(a<b)base++;
    }
    if(zero>base){
        return "zero"
    }else if (zero<base){
        return "base"
    }else{
        return "draw"
    }
}
