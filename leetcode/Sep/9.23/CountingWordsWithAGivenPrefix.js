/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let answer = 0;
  for (const word of words) {
    answer += word.indexOf(pref) == 0 ? 1 : 0;
  }
  return answer;
};
