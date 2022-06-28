// var MyCalendarTwo = function() {
//     this.check=new Map();
// };

// /** 
//  * @param {number} start 
//  * @param {number} end
//  * @return {boolean}
//  */
// MyCalendarTwo.prototype.book = function(start, end) {
//     let boolean=true
//     for(let i=start; i<end;i++){
//         if(this.check.get(i) && this.check.get(i)>=2)return false;        
//     }
    
//     for(let j=start; j<end; j++){
//         if(this.check.get(j)){
//             this.check.set(j, this.check.get(j)+1)
//         }else{this.check.set(j,1)}
//     }
//     return true
// }

// /** 
//  * Your MyCalendarTwo object will be instantiated and called as such:
//  * var obj = new MyCalendarTwo()
//  * var param_1 = obj.book(start,end)
//  */
var MyCalendarTwo = function () {
  this.calendar = [];
  this.overlaps = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (let date of this.overlaps) {
    if (start < date[1] && end > date[0]) return false;
  }

  for (let date of this.calendar) {
    if (start < date[1] && end > date[0]) {
      this.overlaps.push([Math.max(date[0], start), Math.min(date[1], end)]);
    }
  }
  this.calendar.push([start, end]);
  return true;
};


const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
