function solution(lucky) {
  const answer = [];
  for (let i = 0; i < lucky.length; i++) {
    if (check(lucky[i])) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }

  return answer;
}

function check(number) {
  const sum = number
    .toString()
    .split('')
    .map((v) => Number(v))
    .reduce((acc, cur) => acc + cur, 0);

  if (number.toString()[0] !== '1' && number.toString()[0] !== '7')
    return false;

  for (let i = 1; i < number.toString().length; i++) {
    if (number.toString()[i] !== '1' && number.toString()[i] !== '7')
      return false;
    console.log(
      i,
      number
        .toString()
        .split('')
        .slice(0, i)
        .map((v) => Number(v))
        .reduce((acc, cur) => acc + cur, 0)
    );

    if (
      number
        .toString()
        .split('')
        .slice(0, i)
        .map((v) => Number(v))
        .reduce((acc, cur) => acc + cur, 0) ===
      sum / 2
    ) {
      return true;
    }
  }
  return false;
}
