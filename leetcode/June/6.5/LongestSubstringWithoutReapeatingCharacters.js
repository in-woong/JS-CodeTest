function solution(s) {
  const sArray = s.split('');
  if (sArray.length == 0) return 0;
  let answer = [];
  for (let i = 0; i < sArray.length; i++) {
    let array = [];
    for (let j = i; j < sArray.length; j++) {
      if (!array.includes(sArray[j])) {
        array.push(sArray[j]);
        if (j == sArray.length - 1) {
          answer.push(array.length);
        }
      } else {
        answer.push(array.length);

        break;
      }
    }

    if (answer.length == 0) return sArray.length;
  }
  return Math.max(...answer);
}

const input = ['abcabcbb', 'bbbbb', 'pwwkew', '', ' ', 'au', 'aab'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
