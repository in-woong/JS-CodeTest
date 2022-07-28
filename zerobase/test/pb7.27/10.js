function solution(cars, clients) {
  const perform = 0;
  const cost = 1;
  //client 가격 순 오름차순
  //cars 성능 순 오름 차순
  //client를 만족시키는 car 가 있을 시 client 빼고, car 계속 순환

  clients = clients.sort((a, b) => a[cost] - b[cost]);
  cars = cars.sort((a, b) => a[perform] - b[perform]);

  return cars.reduce((total, car) => {
    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      if (client[cost] >= car[cost] && client[perform] <= car[perform]) {
        clients.splice(i, 1);
        return total + 1;
      }
    }
    return total;
  }, 0);
}
