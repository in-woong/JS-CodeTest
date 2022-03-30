function solution(S) {
  let n = parseInt(S, 2);
  console.log(n % 2);
  let count = 0;
  while (n != 0) {
    count++;
    if (n % 2) {
      n -= 1;
    } else {
      n /= 2;
    }
  }
  return count;
}

console.log(solution('1101'));
