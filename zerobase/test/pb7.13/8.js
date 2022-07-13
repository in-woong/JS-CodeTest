function solution(s) {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const stringArray = s.split('');
  const answer = [];
  for (let i = 0; i < stringArray.length; i++) {
    const lIndex = lowerCase.indexOf(stringArray[i]);
    const uIndex = upperCase.indexOf(stringArray[i]);
    if (lIndex > -1 && stringArray.includes(upperCase[lIndex])) {
      answer.push(upperCase[lIndex]);
    }
    if (uIndex > -1 && stringArray.includes(lowerCase[uIndex])) {
      answer.push(upperCase[uIndex]);
    }
  }
  if (answer.length == 0) return '';
  return [...new Set(answer)].sort().pop();
}
