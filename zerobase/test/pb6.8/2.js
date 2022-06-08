function solution(arr) {
    var answer = true;
    const set=[...new Set(arr)];
    const array=[];
    
    for(let i=0; i<set.length; i++){
        array.push(number(set[i],arr));
    }
    const newSet = [...new Set(array)];
    if(newSet.length !==array.length){
        answer=false;
    }
    return answer;
}

function number(n, arr){
    let count=0;
    for(let i=0 ;i<arr.length; i++){
        if(arr[i]==n){
            count++
        }
    }
    return count;
}
