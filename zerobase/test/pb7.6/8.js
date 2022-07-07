function solution(a, b) {
  const arrayA = [];
  a.split('').forEach((item) => {
    if (
      item !== '.' &&
      item !== ',' &&
      item !== '?' &&
      item !== '!' &&
      item !== ' '
    ) {
      arrayA.push(item.toLowerCase());
    }
  });
  const arrayB = [];
  b.split('').forEach((item) => {
    if (
      item !== '.' &&
      item !== ',' &&
      item !== '?' &&
      item !== '!' &&
      item !== ' '
    ) {
      arrayB.push(item.toLowerCase());
    }
  });
  if (arrayA.length !== arrayB.length) {
    console.log('length');
    return 'NO';
  }
  for (let i = 0; i < arrayA.length; i++) {
    const index = arrayB.indexOf(arrayA[i]);
    if (index == -1) {
      console.log('index');
      return 'NO';
    }

    arrayB.splice(index, 1);
  }
  if (arrayB.length == 0) return 'YES';

  return 'NO';
}

const input = [
  ['Tom Marvolo Riddle', 'I am Lord Voldemort.'],
  ['.HELLO', ',hello!'],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
