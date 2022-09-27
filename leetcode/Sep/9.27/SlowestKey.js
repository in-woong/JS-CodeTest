/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  const array = [];
  let temp = 0;
  for (let i = 0; i < keysPressed.length; i++) {
    array.push([keysPressed[i], releaseTimes[i] - temp]);
    temp = releaseTimes[i];
  }
  array.sort((a, b) => {
    if (a[1] < b[1]) return 1;
    else if (a[1] > b[1]) return -1;
    else {
      return b[0].charCodeAt(0) - a[0].charCodeAt(0);
    }
  });

  return array[0][0];
};
