function solution(s) {
  let array = s.split('');
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 'I':
        if (array[i + 1] == 'V' || array[i + 1] == 'X') {
          count -= 1;
        } else {
          count += 1;
        }
        break;
      case 'V':
        count += 5;
        break;
      case 'X':
        if (array[i + 1] == 'L' || array[i + 1] == 'C') {
          count -= 10;
        } else {
          count += 10;
        }
        break;
      case 'L':
        count += 50;
        break;
      case 'C':
        if (array[i + 1] == 'D' || array[i + 1] == 'M') {
          count -= 100;
        } else {
          count += 100;
        }
        break;
      case 'D':
        count += 500;
        break;
      case 'M':
        count += 1000;
        break;
      default:
        return false;
    }
  }
  return count;
}

console.log(solution('XXVI'));
