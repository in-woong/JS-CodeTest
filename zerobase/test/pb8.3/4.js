function solution(arr) {
    const array=combination(arr,n);
    for(let i=0 ;i<array.length;i ++){
        array[i]
    }
    return 0
}

function combination(arr, n) {
    if(n==1)return arr.map(v=>[v]);

    const result=[];
    arr.forEach((fixed,idx,arr)=>{
        const rest=fixed.slice(idx+1);
        const combins = combination(rest,n-1);
        const combine = combins.map(v=>[fixed,...v]);
        result.push(...combine);
    })
    return result;
}