/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution(arr) {
  const set = new Set()
  arr.flatMap(s => s.split(' '))
    .map(s => set.add(s))

  return Array.from(set)
    .sort()
}

export default solution
