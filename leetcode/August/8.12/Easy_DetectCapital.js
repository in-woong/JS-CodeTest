/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let tempWord = word.toUpperCase();
  let bool = false;
  if (word[0] === tempWord[0] && word[1] === tempWord[1]) {
    //All capital
    for (let i = 2; i < word.length; i++) {
      if (word[i] !== tempWord[i]) return false;
    }
  } else if (word[0] === tempWord[0]) {
    //First capital
    for (let i = 1; i < word.length; i++) {
      if (word[i] === tempWord[i]) return false;
    }
  } else {
    for (let i = 0; i < word.length; i++) {
      if (word[i] == tempWord[i]) return false;
    }
  }
  return true;
};
