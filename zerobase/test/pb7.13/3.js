function solution(arr, n) {
    if(arr.length==0)return -1;
    let array=arr.sort((a,b)=>b-a);
    
    let item= array.pop();
    
    while(item<n){
        if(array.length==0)return -1
        item=array.pop();
        
    }

    return item;
    

}