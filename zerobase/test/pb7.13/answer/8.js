function solution(s) {
  const letterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    letterMap.set(s[i], true);
  }

  for (let i = 'z'.charCodeAt(0); i > 'a'.charCodeAt(0); i--) {
    const c = String.fromCharCode(i);
    const lowerCase = c.toLowerCase();
    const upperCase = c.toUpperCase();
    if (letterMap.get(lowerCase) && letterMap.get(upperCase)) return upperCase;
  }
  return '';
}
