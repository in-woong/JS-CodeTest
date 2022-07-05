var hammingDistance = function(x, y) {
    let count =0;
    while(x||y){
        const restX=x%2;
        const restY=y%2;
        x=Math.floor(x/2);
        y=Math.floor(y/2);
        
        if(restX!==restY)count++
    }
    return count
}