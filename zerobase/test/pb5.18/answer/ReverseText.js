/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  let result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i]
  }
  return result
}

export default solution