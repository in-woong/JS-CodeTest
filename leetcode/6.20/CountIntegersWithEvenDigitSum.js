function solution(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (digitSum(i)) {
      answer++;
    }
  }
  return answer;
}

function digitSum(n) {
  const array = n.toString().split('');
  const sum = array.reduce((arr, cur) => Number(arr) + Number(cur), 0);

  if (sum % 2 == 0) return true;
  else return false;
}

const input = [4, 30];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
