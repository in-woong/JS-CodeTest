function solution(arr, n) {
    let max=-1;
    for(let i=0 ;i<arr.length;i++){
        if(arr[i]>max && arr[i]<=n){
            max=arr[i]
        }
    }
    
    return max;
}