function solution(sentence, word) {
  const array = sentence.split(' ');
  return array.indexOf(word);
}
function solution(sentence, word) {
  const array = sentence.split(' ');
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] == word) {
      result.push(i);
    }
  }
  if (result.length == 0) return -1;
  return result[result.length - 1];
}

const input = [['Hello every world', 'Every']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
