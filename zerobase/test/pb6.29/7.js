function solution(text, s) {
  const textArray = text.split('');
  const total = textArray.length;
  let count = 0;
  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i] == s) count++;
  }

  return Math.floor((count / total) * 100);
}
