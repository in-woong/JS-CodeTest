/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  const stringArray = s.match(/[a-zA-Z]/g);
  if (!stringArray) return s;
  const array = stringArray.slice();

  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (stringArray.includes(s[i])) answer += array.pop();
    else answer += s[i];
  }
  return answer;
};
