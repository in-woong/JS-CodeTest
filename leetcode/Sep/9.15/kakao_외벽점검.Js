// function solution(n, weak, dist) {
//   //weak의 순서대로 하고, dist 내에있는 것들을 빼낸다, 그리고, 몇개가 남는지 찾는다.
//   let i = 0;
//   dist.sort((a, b) => b - a);
//   console.log(getPermutation(dist))
//   weak.sort((a, b) => a - b);
//   let answer = Infinity;
//   while (i < weak.length) {
//     let count = 0;
//     for (let j = 0; j < dist.length; j++) {
//       const friend = dist[j] + weak[count];
//       for (let i = count; i < weak.length; i++) {
//         if (weak[i] <= friend) {
//           count++;
//         }
//       }

//       if (count >= weak.length) {
//         answer = answer > j + 1 ? j + 1 : answer;
//         console.log(answer, weak);
//         break;
//       }
//     }
//     weak.push(weak.shift() + n);
//     i++;
//   }
//   if (answer === Infinity) return -1;
//   return answer;
// }
// function getPermutation(array) {
//   const permutation = (array, n) => {
//     if (n === 1) return array.map((el) => [el]);
//     const result = [];

//     array.forEach((fixed, idx, arr) => {
//       const rest = arr.filter((_, index) => index != idx);
//       const perms = permutation(rest, n - 1);
//       const combine = perms.map((v) => [fixed, ...v]);
//       result.push(...combine);
//     });
//     return result;
//   };
//   return permutation(array, array.length);
// }

function solution(n, weak, dist) {
  //weak의 순서대로 하고, dist 내에있는 것들을 빼낸다, 그리고, 몇개가 남는지 찾는다.

  const distArray = getPermutation(dist);
  weak.sort((a, b) => a - b);
  let answer = Infinity;
  for (let k = 0; k < distArray.length; k++) {
    dist = distArray[k];
    let i = 0;

    while (i < weak.length) {
      let count = 0;
      for (let j = 0; j < dist.length; j++) {
        const friend = dist[j] + weak[count];

        for (let i = count; i < weak.length; i++) {
          if (weak[i] <= friend) {
            count++;
          }
        }

        if (count >= weak.length) {
          answer = answer > j + 1 ? j + 1 : answer;

          break;
        }
      }
      weak.push(weak.shift() + n);

      i++;
    }
  }
  if (answer === Infinity) return -1;
  return answer;
}

function getPermutation(array) {
  const permutation = (array, n) => {
    if (n === 1) return array.map((el) => [el]);
    const result = [];

    array.forEach((fixed, idx, arr) => {
      const rest = arr.filter((_, index) => index != idx);
      const perms = permutation(rest, n - 1);
      const combine = perms.map((v) => [fixed, ...v]);
      result.push(...combine);
    });
    return result;
  };
  return permutation(array, array.length);
}
