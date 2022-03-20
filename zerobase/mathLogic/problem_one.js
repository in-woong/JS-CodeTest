// function answer(arr) {
//   let [s, t, answer] = arr;

//   for (let i = 1; i < answer; i++) {
//     if (recursive(s, t, i) === answer) {
//       return i;
//     }
//   }
//   return -1;
// }

// function recursive(s, t, num) {
//   if (num == 1) return s;

//   return recursive(s, t, num - 1) + t;
// }

function answer(input) {
  const [s, d, n] = input;
  let index = -1;
  console.log((n - s) % d);
  if ((n - s) % d == 0) {
    console.log('TRUD');
    index = (n - s) / d + 1;
  }
  return index;
}

let input = [
  [1, 2, 7],
  [2, 3, 10],
  [3, 5, 23],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
