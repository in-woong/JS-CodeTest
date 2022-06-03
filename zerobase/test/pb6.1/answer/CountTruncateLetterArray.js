/**
 * @param arr {string[]}
 * @returns {number}
 */
function solution(arr) {
  const set = new Set()
  arr.flatMap(s => s.split(' '))
    .map(s => set.add(s))

  return set.size
}

export default solution
