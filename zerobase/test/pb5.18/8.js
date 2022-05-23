function solution(s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if (i + 1 < s.length && s[i + 1] == 'V') {
          result -= 1;
        } else if (i + 1 < s.length && s[i + 1] == 'X') {
          result -= 1;
        } else {
          result += 1;
        }
        break;
      case 'V':
        result += 5;
        break;
      case 'X':
        if (i + 1 < s.length && s[i + 1] == 'L') {
          result -= 10;
        } else if (i + 1 < s.length && s[i + 1] == 'C') {
          result -= 10;
        } else {
          result += 10;
        }
        break;
      case 'L':
        result += 50;
        break;
      case 'C':
        if (i + 1 < s.length && s[i + 1] == 'D') {
          result -= 100;
        } else if (i + 1 < s.length && s[i + 1] == 'M') {
          result -= 100;
        } else {
          result += 100;
        }
        break;
      case 'D':
        result += 500;
        break;
      case 'M':
        result += 1000;
        break;
    }
    console.log(result);
  }
  return result;
}

const input = ['XXVI', 'CDXLL'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
