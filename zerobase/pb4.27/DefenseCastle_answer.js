function solution(distance, time) {
  const enemy = [];

  for (let i = 0; i < distance.length; i++) {
    enemy.push(Math.floor(distance[i] / time[i]));
  }

  enemy.sort((a, b) => a - b);
  console.log(enemy);
  let curTime = 0;
  let shield = 0;

  for (let enemyArrivalTime of enemy) {
    if (curTime < enemyArrivalTime) {
      shield += enemyArrivalTime - curTime;
    }
    console.log(shield);
    shield -= 1;

    if (shield < 0) {
      return -1;
    }

    curTime = enemyArrivalTime;
  }
  return shield;
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
