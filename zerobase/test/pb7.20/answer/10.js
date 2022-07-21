/** 
* @param array {number[]}
* @return {string[]}
*/
function solution(array) {
 const IN = 'In'
 const OUT = 'Out'
 const END = 'End'

 const result = []

 for (let num = 1; num <= 100; num++) {
   if (array.length === 0) break

   const hasNumber = array[0] === num
   if (hasNumber) {
     array.shift()
     result.push(IN)
   } else {
     result.push(IN)
     result.push(OUT)
   }
 }

 result.push(END)
 return result
}

export default solution