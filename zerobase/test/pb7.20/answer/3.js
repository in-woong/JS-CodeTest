function solution(sticks) {
  let l1 = sticks[0];
  let l2 = (sticks = [1]);
  let l3 = sticks[2];

  if (l1 === l2 + l3 || l2 === l1 + l3 || l3 === l2 + l1) {
    return 'YES';
  } else if (
    (l1 % 2 === 0 && l2 === l3) ||
    (l2 % 2 === 0 && l1 === l3) ||
    (l3 % 2 === 0 && l1 === l2)
  ) {
    return 'YES';
  } else {
    return 'NO';
  }
}
