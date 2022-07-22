/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const array = paragraph
    .split(' ')
    .flatMap((item) => item.match(/(\w+)/g))
    .map((item) => {
      if (item == null) return;
      return item.toLowerCase();
    });
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      map.set(array[i], map.get(array[i]) + 1);
    } else {
      map.set(array[i], 1);
    }
  }
  const answerArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let count = 0;
  let answer = answerArray[count][0];
  while (banned.includes(answer)) {
    count++;
    answer = answerArray[count][0];
  }

  return answer;
};
