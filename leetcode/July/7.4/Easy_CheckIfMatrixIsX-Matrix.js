var checkXMatrix = function(grid) {
    // 0,0 /1,1/2,2/3,3/4,4/5,5
     // n-1,0/n-2,1/,n-3,2/
     const n =grid.length;
     for(let i=0;i<n; i++){
         for(let j=0;j<n; j++){
             if(i==j || i+j==n-1){
                 if(grid[i][j]==0)return false
             }else{
                 if(grid[i][j]!==0)return false
             }
             
         }
     }
     return true
 };