/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]] += 1;
    } else {
      obj[s[i]] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
