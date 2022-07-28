/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  const wordArray = word.split('');
  let answer = 0;
  for (let i = 0; i < patterns.length; i++) {
    const tempArray = patterns[i].split('');
    let bool = false;
    for (let j = 0; j < wordArray.length; j++) {
      if (tempArray[0] === wordArray[j]) {
        const array = wordArray.slice(j);
        if (substring(array, tempArray)) {
          answer++;
          bool = true;
        }
      }
      if (bool) break;
    }
  }

  return answer;
};

function substring(array, tempArray) {
  for (let i = 0; i < tempArray.length; i++) {
    if (array[i] !== tempArray[i]) return false;
  }
  return true;
}
