/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  let result = null
  arr.forEach(num => {
    if (result === null || Math.abs(num) < Math.abs(result)) {
      result = num
    } else if (Math.abs(num) === Math.abs(result) && num < result) {
      result = num
    }
  })

  return result
}

export default solution
