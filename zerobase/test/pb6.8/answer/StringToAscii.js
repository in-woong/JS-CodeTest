/**
 * @param s {string}
 * @returns {number}
 */
function solution(s) {
  const result = []

  for (let i = 0; i < s.length; i++) {
    result.push(s.charCodeAt(i))
  }

  return result
}

export default solution