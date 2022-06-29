//테스트 3,6

// function solution(arr) {
//   const middle = arr.length / 2;
//   const total = arr.length;
//   arr.sort((a, b) => b - a);

//   let temp = arr[0];
//   let count = 1;
//   const countArray = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (temp == arr[i]) {
//       count++;
//     } else {
//       countArray.push(count);
//       count = 1;
//       temp = arr[i];
//     }
//   }

//   countArray.push(count);

//   let percent = 0;
//   for (let i = 0; i < countArray.length; i++) {
//     percent += countArray[i];
//     if (Math.ceil((percent / total) * 100) >= 50) {
//       return percent;
//     }
//   }
//   return arr.length;
// }

function solution(arr) {
  arr.sort((a, b) => b - a);
  const newArray = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      temp = arr[i];
      count++;
      continue;
    }
    if (temp == arr[i]) {
      count++;
    } else {
      newArray.push(count);
      count = 1;
      temp = arr[i];
    }
    if (i == arr.length - 1) {
      newArray.push(count);
    }
  }

  let answer = 0;
  for (let i = 0; i < newArray.length; i++) {
    answer += newArray[i];
    if (answer >= arr.length / 2) {
      return answer;
    }
  }
}
const input = [
  [10, 20, 30, 40, 50],
  [100, 100, 100, 100, 100, 95, 95, 95, 90],
  [90, 90, 90, 90, 90, 90, 90],
  [10, 20],
  [50, 50, 50, 45, 10],
  [50, 50, 50, 50, 50, 50],
];

for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i]));
}
