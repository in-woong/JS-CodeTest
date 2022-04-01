function solution(S) {
  let arr = S.split('');
  let numbers = S.match(/\d+/gi);
  let operators = S.match(/[+\-*/]/gi);

  let temp = parseFloat(numbers[0]);
  let result = 0;

  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case '*':
        temp *= parseFloat(numbers[i + 1]);
        break;
      case '/':
        temp /= parseFloat(numbers[i + 1]);
        break;
      case '+':
        result += temp;
        temp = 0;
        temp += parseFloat(numbers[i + 1]);
        break;
      case '-':
        result += temp;
        temp = 0;
        temp -= parseFloat(numbers[i + 1]);
        break;
    }
  }
  result += temp;
  return result.toFixed(2);
}

const input = [
  '2-6-(7*8)/2+5',
  '2*3+(5/6)*3+15',
  '1+(2*3)/4-5',
  '1*2*3*0.8',
  '3-2*5-11',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
