function solution(array) {
  const last = array[array.length - 1];
  const answer = [];
  for (let i = 1; i <= last; i++) {
    if (array.includes(i)) {
      answer.push('In');
    } else {
      answer.push('In');
      answer.push('Out');
    }
  }
  answer.push('End');

  return answer;
}
