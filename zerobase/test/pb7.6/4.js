function solution(arr1, arr2) {
    const answer=[]
    for(let i=0 ;i<arr1.length; i++){
        if(arr2.includes(arr1[i])){
            answer.push(arr1[i])
        }
    }
    return answer.sort((a,b)=>a-b)
}