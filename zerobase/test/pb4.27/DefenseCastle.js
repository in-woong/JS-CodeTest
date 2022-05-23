function solution(distance, time) {
  //while문으로 tick을 1씩추가
  // for문으로 tick이 해당값과 동일 할 때 적의 값 ++,
  // 아군 - 적군으로 return 값 출력
  let array = [];
  for (let i = 0; i < distance.length; i++) {
    array[i] = Math.floor(distance[i] / time[i]);
  }
  let tick = 0;
  let enemy = 0;
  let army = 0;
  let army_temp = 0;
  while (true) {
    let n = array.length;
    for (let i = 0; i < n; i++) {
      let temp = array.shift();

      if (temp === tick) {
        enemy++;
      } else {
        array.push(temp);
      }
    }
    if (army < enemy) return -1;
    army_temp = army - enemy;
    enemy = 0;
    army = army_temp;
    if (array.length == 0) return army;
    tick++;
    army++;
  }
}
const input = [
  [
    [1, 2, 8],
    [1, 1, 2],
  ],
  [
    [2, 2, 3, 6],
    [1, 1, 1, 2],
  ],
  [
    [1, 1],
    [1, 1],
  ],
  [
    [3, 3],
    [1, 1],
  ],
  [
    [1, 5, 7],
    [1, 2, 3],
  ],
  [
    [3, 3, 3],
    [1, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
