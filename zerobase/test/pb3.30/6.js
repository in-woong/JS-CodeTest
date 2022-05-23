function solution(s) {
  const array = s.split('');
  let result = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let string = array[i];
    let count = [string];
    for (let j = i + 1; j < s.length; j++) {
      if (!count.includes(array[j])) {
        count.push(array[j]);
      } else {
        result.push(count.length);
        break;
      }
    }
  }
  return Math.max(...result);
}
console.log(solution('abssccbsbsv'));
