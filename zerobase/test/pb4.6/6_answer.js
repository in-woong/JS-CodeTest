function solution(h, w, areaText) {
  const area = makeArea(h, w, areaText);
  if (area === null) {
    return 0;
  }
  return countDeliveryCase(area);
}

const makeArea = (h, w, areaText) => {
  const area = [];
  let deliveryAvailableNum = 0;
  for (let i = 0; i < h; i++) {
    area[i] = [];

    for (let j = 0; j < w; j++) {
      const index = w * i + j;
      const token = areaText[index];
      const value = token === '.' ? 0 : 1;
      area[i].push(value);
      if (token === '.') {
        deliveryAvailableNum++;
      }
    }
  }
  const isResolvable = deliveryAvailableNum % 3 === 0;
  return isResolvable ? area : null;
};

const countDeliveryCase = function (area) {
  let leastLeftY = -1;
  let leastLeftX = -1;
  for (let y = 0; y < area.length; y++) {
    for (let x = 0; x < area.length; x++) {
      if (area[y][x] === 0) {
        leastLeftY = y;
        leastLeftX = x;
        break;
      }
    }
    if (leastLeftY !== -1) break;
  }
  if (leastLeftY === -1) return 1;

  let result = 0;
  for (let typeIndex = 0; typeIndex < deliveryType.length; typeIndex++) {
    if (setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, 1)) {
      result += countDeliveryCase(area);
    }
    setDeliveryCase(area, leastLeftY, leastLeftX, typeIndex, -1);
  }
  return result;
};

const deliveryType = [
  [[0, 0][0, 1], [0, 2]],
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 0],
  ],
  [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, 1],
  ],
  [
    [0, 0],
    [1, 0],
    [1, -1],
  ],
];

const setDeliveryCase = function (area, y, x, type, action) {
  let available = true;

  for (let i = 0; i < deliveryType[0].length; i++) {
    const newY = y + deliveryType[type][i][0];
    const newX = x + deliveryType[type][i][1];

    const isOutOfRange =
      newY < 0 || newY >= area.length || newX < 0 || newX >= area[0].length;
    if (isOutOfRange) {
      available = false;
    } else {
      const isDuplicated = (area[newY][newX] += action) > 1;
      if (isDuplicated) {
        available = false;
      }
    }
  }
  return available;
};

const input = [
  [3, 6, '@@... @@....@@@.. @@'],
  [3, 3, '.........'],
  [2, 6, '@.........@@'],
  [3, 7, '@.....@@..... @@@..@@@'],
  [9, 5, '@@@@@@... @@...@@...@ @@@@@@... @@...@@...@ @@@@@'],
  [
    10,
    10,
    '@@@@@@@ @@@@@@@ ... @@@@@@@.. .@@@@@@@. ...@@@@@@.. ..@@@@@@... .@@@@@@.... @@@@@@.... @@@@....@@ @@@@@@@ @@@@@',
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
