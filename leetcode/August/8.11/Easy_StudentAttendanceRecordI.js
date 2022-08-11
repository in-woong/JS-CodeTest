/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let consL = false;
  let consCount = 0;
  let absCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'P') {
      consCount = 0;
    } else if (s[i] == 'A') {
      consCount = 0;
      absCount++;
    } else if (s[i] == 'L') {
      if (consL) {
        consCount++;
        if (consCount >= 3) return false;
      } else {
        consL = true;
        consCount = 1;
      }
    }
  }
  if (absCount >= 2) return false;
  return true;
};
