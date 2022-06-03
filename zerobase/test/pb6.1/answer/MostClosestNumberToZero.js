/**
 * @param arr {number[]}
 * @returns {number}
 */
function solution(arr) {
  let result = null
  arr.forEach(num => {
    if (result === null || num < result) {
      result = num
    }
  })

  return result
}

export default solution
