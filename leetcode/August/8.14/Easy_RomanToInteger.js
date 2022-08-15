/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;
  let i = 0;

  while (i < s.length) {
    answer += count(i);
  }

  function count(n) {
    switch (s[n]) {
      case 'I':
        if (n + 1 < s.length && s[n + 1] == 'V') {
          i = n + 2;
          return 4;
        } else if (n + 1 < s.length && s[n + 1] == 'X') {
          i = n + 2;
          return 9;
        } else {
          i = n + 1;
          return 1;
        }

      case 'V':
        i = n + 1;
        return 5;

      case 'X':
        if (n + 1 < s.length && s[n + 1] == 'L') {
          i = n + 2;
          return 40;
        } else if (n + 1 < s.length && s[n + 1] == 'C') {
          i = n + 2;
          return 90;
        } else {
          i = n + 1;
          return 10;
        }
      case 'L':
        i = n + 1;
        return 50;

      case 'C':
        if (n + 1 < s.length && s[n + 1] == 'D') {
          i = n + 2;
          return 400;
        } else if (n + 1 < s.length && s[n + 1] == 'M') {
          i = n + 2;
          return 900;
        } else {
          i = n + 1;
          return 100;
        }
        break;
      case 'D':
        i = n + 1;
        return 500;

      case 'M':
        i = n + 1;
        return 1000;
      default:
        return 0;
    }
  }

  return answer;
};
