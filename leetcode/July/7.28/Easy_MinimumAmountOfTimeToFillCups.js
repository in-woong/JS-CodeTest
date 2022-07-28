/**
 * @param {number[]} amount
 * @return {number}
 */
 var fillCups = function(amount) {
    let count=0;
        while(!valid(amount)){
            amount = amount.sort((a,b)=>a-b);
            if(amount[1]>0){
                amount[1]-=1;
                amount[2]-=1;
                
            }else{
                amount[2]-=1;
            }
            count++;
        }
        return count
    };
    
    function valid(a){
        return a.every(item=>item<=0);
    }