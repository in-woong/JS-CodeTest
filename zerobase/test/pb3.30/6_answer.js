function solution(friends) {
  let map = new Map();
  let result = 0;
  let target = [];

  for (let i = 0; i < friends.length; i++) {
    //target 은 상대방의 팔로워 집합
    target = map.get(friends[i][1]);
    console.log(target);
    //상대방이 팔로워가 없거나, 내가 팔로워에 없다면
    if (target == undefined || target.indexOf(friends[i][0]) == -1) {
      //상대방의 팔로워에
      target =
        target == undefined ? [friends[i][1]] : target.push(friends[i][1]);
      console.log(target, '영희');
      map.set(friends[i][0], target);
    } else {
      console.log(target, 'target');
      result++;
    }
  }
  return result;
}

const input = [
  [
    ['철수', '영희'],
    ['철수', '진수'],
    ['철수', '진호'],
    ['영희', '철수'],
    ['진수', '동수'],
    ['진수', '진호'],
  ],
  [
    ['철수', '영희'],
    ['영희', '진수'],
    ['진수', '영희'],
    ['진수', '진호'],
  ],
  [
    ['철수', '영희'],
    ['영희', '철수'],
    ['진수', '진호'],
    ['진호', '진수'],
  ],
  [['철수', '영희']],
  [
    ['철수', '영희'],
    ['철수', '진수'],
    ['철수', '동수'],
    ['영희', '철수'],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i])}`);
}
