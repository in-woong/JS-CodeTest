function solution(Friends, Taste) {
  const fNumber = Friends.length;
  const friends = new Map();

  for (let count = 1; count < Taste.length; count++) {
    const example = combination(Taste, count);

    for (let i = 0; i < example.length; i++) {
      for (let z = 0; z < Friends.length; z++) {
        friends.set(Friends[z], 0);
      }
      for (let j = 0; j < example[0].length; j++) {
        example[i][j].forEach((friend) => {
          friends.set(friend, friends.get(friend) + 1);
        });
      }

      const values = [...friends.values()];
      const result = values.filter((v) => v !== 0);
      console.log(result, count, example[i]);
      if (result.length == Friends.length) {
        console.log('FIT');
        return count;
      }
    }
  }

  //count를 하나씩 늘린다.
  //모든 친구를 만족 시켰을 때 count를 return
}
function combination(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, index, arr) => {
    const rest = arr.slice(index + 1);
    const combins = combination(rest, n - 1);
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}
const input = [
  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew', 'bobby'],
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1} ${solution(input[i][0], input[i][1])}`);
}
