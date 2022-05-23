function solution(s) {
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (alphabet.includes(s[i])) {
      set.add(alphabet.indexOf(s[i]));
    }
  }
  if (set.size == 26) {
    return true;
  }
  return false;
}

const input = ['abcdefghij klmnopqrstuvwxyz'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
