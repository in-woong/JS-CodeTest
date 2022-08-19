/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  //true: 1,2,3,5,6
  //false: 4,7,
  if (n % 4 == 0) return false;
  return true;
};
