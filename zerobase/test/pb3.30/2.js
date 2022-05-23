function solution(p, s) {
  const array = [];
  const pArray = p.split('');
  const sArray = s.split(' ');

  for (let i = 0; i < p.split('').length; i++) {
      if(pArray.length !==sArray.length)return false
    if (array[pArray[i]] === undefined) {
      array[pArray[i]] = sArray[i];
    } else {
      if (array[pArray[i]] == sArray[i]) {
        continue;
      } else {
        return false;
      }
    }

    if (array[sArray[i]] === undefined) {
      array[sArray[i]] = pArray[i];
    } else {
      if (array[sArray[i]] == pArray[i]) {
        continue;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(solution('가나다라', '바나나 드래곤 스리랑카 바나나'));
