function solution(name) {
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  let count = 0;
  //앞 뒤를 빼고A 만 있는 경우와 아닌 경우
  const newName = name.slice().split('');
  const firstIndex = alphabet.indexOf(newName.pop());
  const lastIndex = alphabet.indexOf(newName.shift());
  if (newName.filter((a) => a !== 'A').length === 0) {
    count += Math.min(firstIndex, 26 - firstIndex);
    count += Math.min(lastIndex, 26 - lastIndex);

    count++;
  } else {
    for (let i = 0; i < name.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (name[i] === 'A' && name.length === 2) {
          console.log(i.j);
          break;
        }
        if (alphabet[j] === name[i]) {
          // console.log(j, alphabet.length - j);
          count += Math.min(j, alphabet.length - j);
        }
      }
      if (i !== name.length - 1) {
        count++;
      }
    }
  }
  return count;
}

const input = ['JAZ', 'JEROEN', 'JAN'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
