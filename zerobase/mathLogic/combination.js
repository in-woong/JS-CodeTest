let input = [1, 2, 3, 4];
let count = 0;
let output = [];

// function combination(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       count++;
//       console.log(arr[i], arr[j]);
//     }
//   }
// }

// function combination(arr, data, s, idx, r) {
//   if (s == r) {
//     count++;
//     console.log(data);
//     return;
//   }

//   for (let i = idx; arr.length - i >= r - s; i++) {
//     data[s] = arr[i];
//     combination(arr, data, s + 1, i + 1, r);
//   }
// }

function combination(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combins = combination(rest, n - 1);
    console.log(combins, 'combins');
    const combine = combins.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result
}

console.log(combination(input, 2));

