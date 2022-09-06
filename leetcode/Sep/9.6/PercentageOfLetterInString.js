/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
  const sArray = s.split('');
  let count = 0;
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == letter) count++;
  }

  return Math.floor((count / s.length) * 100);
};
