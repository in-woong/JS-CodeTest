function solution(N, dices) {
  let zero_win = 0;
  let base_win = 0;

  dices.forEach((e, i) => {
    if (e[0] > e[1]) {
      zero_win += 1;
    } else if (e[0] < e[1]) {
      base_win += 1;
    }
  });
  if (zero_win === base_win) {
    return 'draw';
  } else if (zero_win > base_win) {
    return 'zero';
  } else {
    return 'base';
  }
}
