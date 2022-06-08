function solution(cars, clients) {
  let count = 0;
  let newArray;
  const result = [];
  for (let i = 0; i < clients.length; i++) {
    const client = [];
    const [perform, cost] = clients[i];
    for (let j = 0; j < cars.length; j++) {
      if (perform <= cars[j][0] && cost >= cars[j][1]) {
        client.push(j);
      }
    }
    result.push(client);
  }
  const array = [];
  newArray = select(array, result);

  return newArray.length;
}
//[[1,2],[2,3,4],[1]]
function select(array, result) {
  if (result.length == 0) return array;
  const arr = result.shift();

  let resultArray = array.slice();
  let selected = result.slice();
  for (let i = 0; i < arr.length; i++) {
    let newArray = array.slice();

    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);

      newArray = select(newArray, selected);

      resultArray =
        newArray.length < resultArray.length ? resultArray : newArray;
    }
    if (i == arr.length - 1) {
      newArray = select(newArray, selected);

      resultArray =
        newArray.length < resultArray.length ? resultArray : newArray;
    }
  }
  return resultArray;
}

// const input = [
//   [
//     [
//       [10, 100],
//       [2, 200],
//       [30, 300],
//     ],
//     [
//       [5, 110],
//       [9, 500],
//       [20, 400],
//     ],
//   ],
// ];

const input = [
  [[], [[1, 3], [1, 2], [3]]],
  [[], [[1, 2], [2, 3], [2]]],
];
for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
