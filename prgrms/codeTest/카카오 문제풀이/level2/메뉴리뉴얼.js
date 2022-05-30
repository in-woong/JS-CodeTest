// function solution(orders, course) {
//   //orders를 combination 해서 배열을 넣는다.
//   let array = {};
//   let answer = [];
//   for (let i = 0; i < course.length; i++) {
//     let comb = {};
//     select(orders, course[i], comb);
//     const temp = Object.entries(comb).sort(([, a], [, b]) => b - a);
//     const sortedComb = Object.fromEntries(temp);
//     array[course[i]] = sortedComb;
//   }
//   for (let i = 0; i < course.length; i++) {
//     const courseArray = Object.entries(array[course[i]]);

//     if (courseArray.length < 1 || courseArray[0][1] <= 1) continue;
//     let max = courseArray[0][1];
//     for (let i = 0; i < courseArray.length; i++) {
//       if (courseArray[i][1] == max) {
//         answer.push(courseArray[i][0]);
//       }
//     }
//   }

//   return answer.sort();
// }

// function select(orders, courseNum, answer) {
//   for (let i = 0; i < orders.length; i++) {
//     const orderArray = orders[i].split('');
//     const selectedArray = combination(orderArray, courseNum);
//     selectedArray.forEach((item) => {
//       const itemName = item.sort().join('');
//       if (!answer[itemName]) {
//         answer[itemName] = 1;
//       } else {
//         answer[itemName]++;
//       }
//     });
//   }
// }

// function combination(arr, n) {
//   if (n === 1) return arr.map((v) => [v]);
//   const result = [];
//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.slice(idx + 1);
//     const combins = combination(rest, n - 1);
//     const combine = combins.map((v) => [fixed, ...v]);
//     result.push(...combine);
//   });
//   return result;
// }

function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  orders.forEach((order) => {
    const sorted = order.split('').sort();

    course.forEach((len) => {
      createSet(sorted, 0, len, '', ordered, maxNum, candidates);
    });
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}

function createSet(arr, start, len, foods, ordered, maxNum, candidates) {
  if (len === 0) {
    ordered[foods] = (ordered[foods] || 0) + 1;
    if (ordered[foods] > 1) candidates[foods] = ordered[foods];
    maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
    return;
  }
  for (let i = start; i < arr.length; i++) {
    createSet(arr, i + 1, len - 1, foods + arr[i], ordered, maxNum, candidates);
  }
}

const input = [
  [
    ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
    [2, 3, 4],
  ],
  [
    ['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'],
    [2, 3, 5],
  ],
  [
    ['XYZ', 'XWY', 'WXA'],
    [2, 3, 4],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
