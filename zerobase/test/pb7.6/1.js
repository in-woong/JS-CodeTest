function solution(money, ZERO) {
    ZERO= ZERO.sort((a,b)=>a-b);
    for(let i=0 ;i<ZERO.length;i++){
        let sum= Number(ZERO[i]);
        for(let j=i+1; j<ZERO.length;j++){
            sum+=Number(ZERO[j]);
            if(sum==money){
                return [ZERO[i],ZERO[j]]
            }
            sum=Number(ZERO[i]);
        }
    }
}