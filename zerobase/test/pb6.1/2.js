// function solution(s) {
//   const sArray = s.split('');
//   const upperArray = ['A', 'B', 'C', 'D', 'E', 'F'];

//   for (let i = 0; i < sArray.length; i++) {
//     if (!upperArray.includes(s[i])) {
//       if (Number(s[i] == 0)) continue;
//       if (!Number(s[i])) return false;
//     }
//   }
//   return true;
// }

function solution(s) {
  if (s.length !== 6) return false;

  const COLOR_CODE_ELEMENTS = 'ABCDEF0123456789';

  const elements = s.split('');
  for (let i = 0; i < elements.length; i++) {
    if (COLOR_CODE_ELEMENTS.indexOf(elements[i]) < 0) return fasle;
  }

  return true;
}
const input = ['DACC32', 'AAAAAG', '000000', 'A0BC4'];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
