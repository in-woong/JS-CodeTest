/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  let array = licensePlate
    .split(' ')
    .join('')
    .match(/\D/g)
    .map((item) => item.toLowerCase());
  const map = {};
  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 1;
    } else {
      map[array[i]]++;
    }
  }
  console.log(map);
  let length = 0;
  let answer = '';
  let num = 0;
  for (let i = 0; i < words.length; i++) {
    let temp = count(words[i], map);

    if (temp < 0) continue;

    if (num == 0) {
      num++;
      answer = words[i];
      length = temp;
    }
    answer = temp < length ? words[i] : answer;
    length = temp < length ? temp : length;
  }

  return answer;
};

function count(word, map) {
  const wordArray = word.split('').map((item) => item.toLowerCase());
  const wordMap = {};
  for (let i = 0; i < wordArray.length; i++) {
    if (!wordMap[wordArray[i]]) {
      wordMap[wordArray[i]] = 1;
    } else {
      wordMap[wordArray[i]]++;
    }
  }

  let sum = 0;
  for (const key in map) {
    if (!wordMap[key]) return -1;
    if (wordMap[key] < map[key]) return -1;
    sum += map[key];
  }
  return word.length - sum;
}
