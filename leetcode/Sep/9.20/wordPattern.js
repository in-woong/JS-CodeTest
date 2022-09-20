/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let obj = {};
  let obj2 = {};
  let sArr = s.split(' ');
  if (sArr.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (obj[pattern[i]]) {
      if (obj[pattern[i]] !== sArr[i]) return false;
    } else {
      obj[pattern[i]] = sArr[i];
    }
    if (obj2[sArr[i]]) {
      if (obj2[sArr[i]] !== pattern[i]) return false;
    } else {
      obj2[sArr[i]] = pattern[i];
    }
  }
  return true;
};
