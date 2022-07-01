function solution(s) {
  const array = s.split('');
  let beforeOne = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 1 && beforeOne) return false;

    if (array[i] == 0) {
      beforeOne = true;
    }
  }
  return true;
}

const input = ['1001', '110'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
