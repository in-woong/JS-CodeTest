function solution(city) {
  return calcDistance(city);
}

function calcDistance(city) {
  const aptLocations = [];
  const busLocations = [];

  const ySize = city.length;
  const xSize = city[0].length;

  for (let y = 0; y < ySize; y++) {
    for (let x = 0; x < xSize; x++) {
      if (city[y][x] === 1) {
        aptLocations.push([y, x]);
      } else {
        busLocations.push([y, x]);
      }
    }
  }

  const ret = Array.from(Array(ySize), () => new Array(xSize).fill(0));

  for (let aptIndex = 0; aptIndex < aptLocations.length; aptIndex++) {
    const aptY = aptLocations[aptIndex][0];
    const aptX = aptLocations[aptIndex][1];

    for (let busIndex = 0; busIndex < busLocations.length; busIndex++) {
      const distance =
        Math.abs(aptLocations[aptIndex][0] - busLocations[busIndex][0]) +
        Math.abs(aptLocations[aptIndex][1] - busLocations[busIndex][1]);
      ret[aptY][aptX] =
        ret[aptY][aptX] === 0 ? distance : Math.min(ret[aptY][aptX], distance);
    }
  }
  return ret;
}

const input = [
  [
    [1, 0, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  [
    [1, 1],
    [1, 1],
    [1, 0],
  ],
  [[0]],
  [
    [0, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 0],
  ],
  [[0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0]],
  [[0], [1], [1], [1], [1], [1], [0], [1], [1], [1], [1], [1], [0]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
