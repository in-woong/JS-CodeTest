function solution(users, emoticons) {
  //1부터 100까지 하면서, 가입자수, 판매액을 비교하여 answer를 출력한다.
  const salePercent = [10, 20, 30, 40];
  const arraies = permutation(salePercent, emoticons.length);
  let answerNum = 0;
  let answerPrice = 0;
  for (const array of arraies) {
    let buyerNum = 0;
    let totalPrice = 0;
    let salePrice = 0;

    for (let i = 0; i < users.length; i++) {
      const [target, price] = users[i];

      let buyPrice = 0;
      for (let j = 0; j < array.length; j++) {
        if (array[j] >= target) {
          buyPrice += (emoticons[j] * (100 - array[j])) / 100;
        }
      }

      if (buyPrice >= price) buyerNum++;
      else totalPrice += buyPrice;
    }

    if (buyerNum >= answerNum) {
      if (buyerNum == answerNum) {
        if (totalPrice > answerPrice) {
          answerNum = buyerNum;
          answerPrice = totalPrice;
        }
      } else {
        answerNum = buyerNum;
        answerPrice = totalPrice;
      }
    }
  }

  return [answerNum, answerPrice];
}
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
