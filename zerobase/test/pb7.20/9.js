// function search(edible, caneat, eater, chosen, best) {
//   if (best <= chosen) return best;
//   var first = 0;
//   while (first < edible.length && 0 < edible[first]) {
//     first += 1;
//   }
//   if (first == edible.length) {
//     best = Math.min(best, chosen);
//     return best;
//   }

//   for (var i in caneat[first]) {
//     var food = caneat[first][i];
//     for (var j in eater[food]) {
//       edible[eater[food][j]] += 1;
//     }
//     best = search(edible, caneat, eater, chosen + 1, best);
//     //console.log("2 ," + best);
//     for (var j in eater[food]) {
//       edible[eater[food][j]] -= 1;
//     }
//   }

//   return best;
// }

// function solution(Friends, Taste) {
//   var best = Taste.length;

//   var edible = new Array(Friends.length);
//   var caneat = new Array(Friends.length);
//   var eater = new Array(Taste.length);

//   var dict = new Map();

//   edible.fill(0);
//   eater.fill([]);

//   for (var i = 0; i < caneat.length; i++) {
//     caneat[i] = [];
//   }

//   for (var i = 0; i < eater.length; i++) {
//     eater[i] = [];
//   }

//   for (var i = 0; i < Friends.length; i++) {
//     dict.set(Friends[i], i);
//   }

//   for (var i = 0; i < Taste.length; i++) {
//     for (var j = 0; j < Taste[i].length; j++) {
//       caneat[dict.get(Taste[i][j])].push(i);
//       eater[i].push(dict.get(Taste[i][j]));
//     }
//   }

//   return search(edible, caneat, eater, 0, best);
// }

// function solution(Friends, Taste) {
//   const numbers = [];
//   for (let i = 0; i < Taste.length; i++) {
//     numbers.push(i);
//   }
//   for (let i = 1; i < Taste.length; i++) {
//     const list = getPermutations(numbers, i);
//     for (let j = 0; j < list.length; j++) {
//       let good = [];
//       for (let k = 0; k < list[j].length; k++) {
//         good = [...good, ...Taste[list[j][k]]];
//       }
//       const setList = Array.from(new Set(good));
//       console.log(setList);
//       if (setList.length === Friends.length) {
//         return i;
//       }
//     }
//   }
// }
// function getPermutations(arr, n) {
//   const result = [];
//   if (n === 1) return arr.map((v) => [v]);
//   arr.map((me, i) => {
//     const rest = [...arr.slice(0, i)];
//     const permutation = getPermutations(rest, n - 1);
//     const attached = permutation.map((item) => [me, ...item]);
//     result.push(...attached);
//   });
//   return result;
// }
const input = [
  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew', 'bobby'],
      ['andrew', 'ant'],
    ],
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew', 'bobby'],
      ['andrew'],
    ],
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob', 'ant'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew'],
      ['andrew'],
    ],
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [
      ['bobby', 'ant'],
      ['bob'],
      ['bob'],
      ['bob', 'bobby'],
      ['andrew'],
      ['andrew'],
    ],
  ],

  [
    ['bob', 'andrew', 'bobby', 'ant'],
    [['ant'], ['bob'], ['bob'], ['bobby'], ['andrew'], ['andrew']],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i][0], input[i][1])}`);
}
