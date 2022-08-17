/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  const array = s.match(/\d+/g).map((item) => +item);

  let before;
  for (let i = 0; i < array.length; i++) {
    if (i == 0) {
      before = array[0];
      continue;
    }
    if (before >= array[i]) {
      return false;
    }
    before = array[i];
  }
  return true;
};
