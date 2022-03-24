function solution(s) {
  result = [];
  const answer = s.split(/,|\.|\!|\?| |\n/);
  answer.forEach((item) => {
    if (item !== '') {
      result.push(item);
    }
  });
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].split('').reverse().join('');
  }
  return result;
}
console.log(solution('  ! He lello.Wo.r ld!?  '));
