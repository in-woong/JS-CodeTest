/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    answer += s[i].toLowerCase();
  }
  return answer;
};
