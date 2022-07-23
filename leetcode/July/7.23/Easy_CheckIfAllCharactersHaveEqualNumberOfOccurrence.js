/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const sArray = s.split('');

  const map = new Map();
  for (let i = 0; i < sArray.length; i++) {
    if (!map.has(sArray[i])) {
      map.set(sArray[i], 1);
    } else {
      map.set(sArray[i], map.get(sArray[i]) + 1);
    }
  }

  const set = new Set(Array.from(map.values()));
  let answer = set.size == 1 ? true : false;

  return answer;
};
Number.MAX_SAFE_INTEGER
