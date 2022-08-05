/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const aArray = s.split('');
  const gArray = goal.split('');
  for (let i = 0; i < aArray.length; i++) {
    if (aArray[i] === gArray[0] && check(i)) {
      return true;
    }
  }
  function check(i) {
    for (let n = i; n < aArray.length + i; n++) {
      const num = n % aArray.length;
      if (aArray[num] !== gArray[n - i]) return false;
    }
    return true;
  }

  return false;
};
