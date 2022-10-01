/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  if (a === b) return -1;

  const lengths = [];

  if (!isSubSeq(a, b)) lengths.push(a.length);
  if (!isSubSeq(b, a)) lengths.push(b.length);

  return Math.max(...lengths);

  function isSubSeq(str1, str2) {
    let i = 0;

    for (let j = 0; i < str1.length && j < str2.length; j++) {
      if (str1.charAt(i) === str2.charAt(j)) i++;
    }

    return i === str1.length;
  }
};
