/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sArray = s.split('');
  const tArray = t.split('');

  const map = new Map();
  for (let i = 0; i < sArray.length; i++) {
    if (!map.has(sArray[i])) {
      map.set(sArray[i], 1);
    } else {
      map.set(sArray[i], map.get(sArray[i]) + 1);
    }
  }
  for (let i = 0; i < tArray.length; i++) {
    if (!map.has(tArray[i])) return false;
    if (map.get(tArray[i]) < 1) return false;
    map.set(tArray[i], map.get(tArray[i]) - 1);
  }
  const aArray = Array.from(new Set(Array.from(map.values())));
  if (aArray.length == 1 && aArray[0] == 0) return true;
  return false;
};
