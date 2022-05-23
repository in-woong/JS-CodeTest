function solution(A, S) {
  let zombie = [S];
  let member = new Set();
  let touch = new Map();
  let retValue = [];

  member.add(S);
  for (let i = 0; i < A.length; i++) {
    member.add(A[i][0]);
    member.add(A[i][1]);

    if (zombie.indexOf(A[i][0]) != -1) {
      zombie.push(A[i][1]);
    } else if (zombie.indexOf(A[i][1]) != -1) {
      zombie.push(A[i][0]);
    } else {
      if (Array.from(touch.keys()).indexOf(A[i][0]) != -1) {
        touch.set(A[i][1], touch.get(A[i][1] + 1));
      } else {
        touch.set(A[i][1], 1);
      }
    }
  }
  if (member.size === zombie.length) {
    return [S];
  } else {
    for (let i = 0; i < zombie.length; i++) {
      if (Array.from(touch.keys()).indexOf(zombie[i]) != -1) {
        touch.set(zombie[i], -1);
      }
    }
    let maxValue = Math.max.apply(null, Array.from(touch.values()));
    console.log(maxValue);
    let key = Array.from(touch.keys());

    for (let i = 0; i < key.length; i++) {
      if (touch.get(key[i]) == maxValue) {
        retValue.push(key[i]);
      }
    }
    console.log(retValue);
    retValue.sort();
    return retValue;
  }
}

const input = [
  [
    ['A', 'B'],
    ['B', 'C'],
    ['A', 'C'],
    ['A', 'D'],
    ['B', 'E'],
  ],
  'E',
];

console.log(`${1} ${solution(input[0], input[1])}`);
