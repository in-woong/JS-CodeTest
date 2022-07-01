function solution(text, s) {
  let appearCount = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === s) {
      appearCount++;
    }
  }

  return Math.floor((appearCount / text.length) * 100);
}
