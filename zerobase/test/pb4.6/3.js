function solution(S) {
  const truth = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
  };
  const arrayS = S.split('');

  for (let i = 0; i < arrayS.length; i++) {
    console.log(truth);
    if (
      truth.first < 0 ||
      truth.second < 0 ||
      truth.third < 0 ||
      truth.fourth < 0
    )
      return 0;
    switch (arrayS[i]) {
      case '(':
        truth.first++;
        break;
      case ')':
        truth.first--;
        break;
      case '{':
        truth.second++;
        break;
      case '}':
        truth.second--;
        break;
      case '[':
        truth.third++;
        break;
      case ']':
        truth.third--;
        break;
      case '<':
        truth.fourth++;
        break;
      case '>':
        truth.fourth--;
        break;
    }
  }
  if (
    truth.first == 0 &&
    truth.second == 0 &&
    truth.third == 0 &&
    truth.fourth == 0
  )
    return 1;
  return 0;
}

const input = [
  '(()){[<>]}',

  '(()[<>]}',

  '(()){[<((()))>]}',

  '(()){[(<)>]}',

  '(()){[(<>]}',
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
