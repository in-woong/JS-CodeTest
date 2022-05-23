/**
 * @param s {string}
 * @return {string[]}
 */
function solution(s) {
  return s.split(/[.,!? ]/)
    .filter(word => word !== '')
    .map(word => word.split('').reverse().join(''));
}

solution
