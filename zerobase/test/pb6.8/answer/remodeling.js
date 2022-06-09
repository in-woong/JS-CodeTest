/**
 * @param now {Array}
 * @param tobe {Array}
 */

function solution(now, tobe) {
  let answer = 0;
  let c = now.map((e, i) => [e, tobe[i]]);

  for (let i in c) {
    if (c[i][0] < c[i][1]) {
      answer += c[i][1] - c[i][0];
    } else if (c[i][0] > c[i][1]) {
      answer += c[i][1] + c[i][0];
    }
  }
  return answer;
}
// function solution(now, tobe) {
//     var answer = 0
//     var c = now.map(function(e, i) {
//         return [e, tobe[i]];
//     });

//     for (var i in c) {
//         if (c[i][0] < c[i][1]) {
//             answer += c[i][1] - c[i][0]
//         } else if (c[i][0] > c[i][1]) {
//             answer += c[i][1] + c[i][0]
//         }
//     }

//     return answer
// }

const input = [
  [
    [3, 3, 3],
    [0, 0, 0],
  ],
  [
    [3, 3, 3],
    [6, 6, 6],
  ],
  [[1], [10000]],
  [[10000], [1]],
  [
    [4, 8, 4, 2, 1],
    [8, 4, 8, 0, 8],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
