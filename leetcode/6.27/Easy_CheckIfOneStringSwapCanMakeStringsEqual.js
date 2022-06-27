function solution(s1, s2) {
  const s1Array = s1.split('');
  const s2Array = s2.split('');
  let count = 0;
  let temp1;
  let temp2;
  if (s1Array.length !== s2Array.length) return false;
  for (let i = 0; i < s1Array.length; i++) {
    if (s1Array[i] !== s2Array[i]) {
      count++;
      if (count == 1) {
        temp1 = s1Array[i];
        temp2 = s2Array[i];
      }
      if (count == 2 && (temp1 !== s2Array[i] || temp2 !== s1Array[i]))
        return false;
    }
  }

  if (count !== 0 && count !== 2) return false;
  return true;
}

const input = [
  ['bank', 'kanb'],
  ['attack', 'defend'],
  ['kelb', 'kelb'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
