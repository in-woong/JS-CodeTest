let = input = ['a', 'b', 'c'];
let count = 0;

// function permutation(arr) {
//   // i를 첫번째 위치시키는 요소
//   for (let i = 0; i < arr.length; i++) {
//     //두번째 위치
//     for (let j = 0; j < arr.length; j++) {
//       if (i == j) continue;
//       for (let k = 0; k < arr.length; k++) {
//         if (i == k) continue;
//         if (j == k) continue;
//         count++;
//         console.log(arr[i], arr[j], arr[k]);
//       }
//     }
//   }
// }

// function permutation(arr, s, r) {
//   //1.재귀를 멈춰야할 조건
//   if (s == r) {
//     console.log(arr);
//     return;
//   }

//   for (let i = s; i < arr.length; i++) {
//       [arr]
//     permutation(arr, s++, r);
//   }

//   //2.재귀를 돌면서 변경되는 부분
// }

function permutation(arr, n) {
  if (n == 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, index) => index !== idx);
    const perms = permutation(rest, n - 1);
    const combine = perms.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

console.log(permutation(input, 3));
console.log(count);
