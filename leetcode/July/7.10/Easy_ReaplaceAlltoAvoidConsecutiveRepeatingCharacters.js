var modifyString = function (s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const sArray = s.split('');
  let answer = '';
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] == '?') {
      let n = 0;
      while (sArray[i - 1] == alphabet[n] || sArray[i + 1] == alphabet[n]) {
        n++;
      }
      sArray.splice(i, 1, alphabet[n]);
      answer += alphabet[n];
    } else {
      answer += sArray[i];
    }
  }
  return answer;
};
