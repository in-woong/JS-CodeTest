/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function (word1, word2) {
  if (check(word1, word2) && check(word2, word1)) return true;
  return false;
};

function check(word1, word2) {
  const word1Obj = checkFrequency(word1, {});
  const word2Obj = checkFrequency(word2, {});
  for (const key in word1Obj) {
    const num = word2Obj[key] || 0;
    if (Math.abs(word1Obj[key] - num) > 3) return false;
  }

  return true;
}

function checkFrequency(word, obj) {
  for (let i = 0; i < word.length; i++) {
    if (obj[word[i]]) {
      obj[word[i]] += 1;
    } else {
      obj[word[i]] = 1;
    }
  }
  return obj;
}
