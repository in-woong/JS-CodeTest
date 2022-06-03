/**
 * @param arr1 {number[]}
 * @param arr2 {number[]}
 * @returns {number[]}
 */
function solution(arr1, arr2) {
  const set = new Set()

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        set.add(arr1[i])
      }
    }
  }

  const result = Array.from(set)
  result.sort((a, b) => a - b)

  return result
}

export default solution
