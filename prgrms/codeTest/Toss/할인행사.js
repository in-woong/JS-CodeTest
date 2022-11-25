function solution(want, number, discount) {
  const wantObject = {};
  let answer = 0;

  for (let i = 0; i < want.length; i += 1) {
    wantObject[want[i]] = number[i];
  }

  if (discount.length < 10) return 0;

  for (let i = 0; i <= discount.length - 10; i += 1) {
    const partDiscount = discount.slice(i, i + 10);
    const temp = { ...wantObject };

    for (let j = 0; j < 10; j += 1) {
      if (temp[partDiscount[j]] && temp[partDiscount[j]] > 0) {
        temp[partDiscount[j]] -= 1;
      } else break;
    }
    if (isAnswer(temp)) answer += 1;
  }
  return answer;
}

function isAnswer(temp) {
  for (const el in temp) {
    if (temp[el] !== 0) return false;
  }
  return true;
}
