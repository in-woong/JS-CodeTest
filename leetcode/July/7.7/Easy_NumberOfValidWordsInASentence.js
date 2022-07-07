const countValidWords = (ss) => {
  let a = ss.split(' '),
    res = 0;
  for (const s of a) {
    if (s.length > 0) {
      // ignore empty string
      if (ok(s)) res++;
    }
  }
  return res;
};

const ok = (s) => {
  let punctuation = 0,
    hyphen = 0,
    digit = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let c = s[i];
    if (c == '!' || c == '.' || c == ',') {
      if (i != n - 1) return false; // should be at the end of the token
      punctuation++;
    } else if (c == '-') {
      if (i == 0 || i == n - 1) return false; // "-ab", "ab-" are not valid
      if (!isLowerCaseLetter(s[i - 1]) || !isLowerCaseLetter(s[i + 1]))
        return false; // check if surrounded by lowercase
      hyphen++;
    } else if (isDigit(c)) {
      digit++;
    }
  }
  return digit == 0 && punctuation <= 1 && hyphen <= 1; // no digit and both punctuation and hyphen at most one
};

const isDigit = (c) => {
  let s = '0123456789';
  return s.indexOf(c) != -1;
};

const isLowerCaseLetter = (c) => {
  let ascii = c.charCodeAt();
  return ascii >= 97 && ascii <= 122;
};

const input = [
  'cat and  dog',
  '!this  1-s b8d!',
  'alice and bob are playing stone-game10',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
