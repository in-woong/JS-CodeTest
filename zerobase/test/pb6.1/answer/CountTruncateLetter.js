/**
 * @param s {string}
 * @returns {number}
 */
function solution(s) {
  const words = s.split(' ')
  const set = new Set()

  words.forEach(word => set.add(word))

  return set.size
}

export default solution
