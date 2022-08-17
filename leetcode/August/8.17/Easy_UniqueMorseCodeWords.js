/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  //97
  const set = new Set();
  const dots = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];

  for (let i = 0; i < words.length; i++) {
    const temp = [];
    for (let j = 0; j < words[i].length; j++) {
      temp.push(dots[words[i].charCodeAt(j) - 97]);
    }

    set.add(temp.join(''));
  }

  return set.size;
};
