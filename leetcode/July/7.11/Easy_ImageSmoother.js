/**
 * @param {number[][]} img
 * @return {number[][]}
 */
 var imageSmoother = function(img) {
    const answer = Array.from({length:img.length},()=>Array.from({length:img[0].length},()=>0));
    
    const direction=[[1,0],[1,1],[1,-1],[-1,0],[-1,1],[-1,-1],[0,-1],[0,1]]
    
    for(let y=0 ;y<img.length; y++){
        for(let x=0;x<img[0].length;x++){
             let sum=img[y][x];
            let count=1;
            for(let i=0;i<direction.length;i++){
                const [dy,dx]=direction[i];
                const dirY=y+dy;
                const dirX=x+dx;
                
                if(dirY>=0 &&dirY<img.length && dirX>=0 && dirX<img[0].length){
                    count++;
                    sum+=img[dirY][dirX]
                }
            }
            console.log(y,x,sum,count)
            answer[y][x]=Math.floor(sum/count);
        }
    }
    return answer
};