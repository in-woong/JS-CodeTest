function solution(s) {
  const max = Math.ceil(s / 2);
  let count = 0;
  for (let i = 1; i < max; i++) {
    let sum = 0;
    let num = i;
    while (sum <= s) {
      sum += num++;
      if (sum === s) {
        console.log('count');
        count++;
      }
    }
  }
  return count+1;
}

console.log(solution(15));
