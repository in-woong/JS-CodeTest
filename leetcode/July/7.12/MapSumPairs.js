
var MapSum = function() {
    this.map = new Map();
    
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
this.map.set(key,val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    const keyArray= [...this.map.keys()];
    const valueArray= [...this.map.values()]
    let sum=0;
    
    for(let i=0 ;i<keyArray.length;i++){
    if(keyArray[i].split("").slice(0,prefix.length).join("")==prefix){
           sum+=valueArray[i]}
        
    }
    
    return sum
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */