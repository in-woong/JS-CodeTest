function solution(array, s) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (checkFront(array[i], s)) count++;
    console.log(array[i], checkFront(array[i], s));
  }
  return count;
}

function checkFront(strings, s) {
  const stringArray = strings.split('');
  const sArray = s.split('');
  const n = stringArray.length;
  let i = 0;
  while (true) {
    if (i >= n) {
      return true;
    }

    if (stringArray[i] == sArray[i]) {
      i++;
      continue;
    } else {
      return false;
    }
  }
}

const input = [[['n', 'nav', 'nev'], 'naver']];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
