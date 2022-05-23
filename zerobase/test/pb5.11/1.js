const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function solution(s) {
  const lowerArray = lower.split('');
  const upperArray = upper.split('');

  const sArray = s.split('');
  let result = [];

  for (let i = 0; i < sArray.length; i++) {
    if (lowerArray.includes(sArray[i])) {
      result.push(upperArray[lowerArray.indexOf(sArray[i])]);
    } else {
      result.push(lowerArray[upperArray.indexOf(sArray[i])]);
    }
  }
  return result.join('');
}

const input = ["Naver"];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
