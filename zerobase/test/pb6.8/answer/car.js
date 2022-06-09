function solution(cars, clients) {
  const perform = 0;
  const cost = 1;
  //clients를 오름차순으로 정열(가격의)
  clients = clients.sort((a, b) => a[cost] - b[cost]);
  //cars는 perform의 오름차순으로 정렬
  cars = cars.sort((a, b) => a[perform] - b[perform]);
  console.log(cars, clients);
  let sells = cars.reduce((total, car) => {
    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (client[cost] >= car[cost] && client[perform] <= car[perform]) {
        clients.splice(i, 1);
        return total + 1;
      }
    }
    return total;
  }, 0);
  return sells;
}

const input = [
  [[[80, 300]], [[50, 200]]],
  [
    [
      [10, 100],
      [2, 200],
      [30, 300],
    ],
    [
      [5, 110],
      [9, 500],
      [20, 400],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
