function solution(n) {
  if (n == 1) return 10;
  let min = Math.pow(10, n - 1);
  let max = Math.pow(10, n);
  let count = 0;
  console.log(min, max);
  for (let i = min; i < max; i++) {
    if (palindrom(i)) {
      count++;
      console.log(i, count);
    }
  }
  console.log('101', palindrom(101));
  return count % 100000007;
}

function palindrom(number) {
  number = number.toString().split('');
  for (let i = 0; i < number.length; i++) {
    if (number[i] !== number[number.length - 1 - i]) return false;
  }
  return true;
}

const input = [2, 1, 10000, 5014];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
