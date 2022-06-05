// function solution(str1, str2) {
//   const oneArray = makeArray(str1);
//   const twoArray = makeArray(str2);

//   // 합집합, 교집합을 구한다.
//   let i = 0;
//   let j = 0;
//   let intersection = [];
//   while (i !== oneArray.length) {
//     if (oneArray.length == 0 || twoArray.length == 0) break;
//     if (j == twoArray.length) {
//       j = 0;
//       i++;
//     }
//     if (oneArray[i] == twoArray[j]) {
//       intersection.push(...oneArray.splice(i, 1));
//       twoArray.splice(j, 1);

//       i = 0;
//       j = 0;
//       continue;
//     }
//     j++;
//   }
//   const interLength = intersection.length;
//   const unionLength = intersection.length + oneArray.length + twoArray.length;
//   if (interLength === 0 && unionLength === 0) return 0;
//   let num = Math.floor((interLength / unionLength) * 65536);

//   return num;
// }

// function makeArray(str1) {
//   //두글자씩 끊어서 다중집합의 원소를 만든다.
//   // 공백, 숫자, 특수문자가 들어있는 경우 버린다.
//   // 모두 대문자 혹은 소문자로 만든다.
//   let result = [];

//   for (let i = 2; i <= str1.length; i++) {
//     result.push(str1.slice(i - 2, i));
//   }

//   return result
//     .map((item) => item.toUpperCase())
//     .filter((item) => !item.match(/[^A-Z]/)?.length);
// }

function solution(str1, str2) {
  const arr1 = explode(str1);
  const arr2 = explode(str2);

  const set = newSet([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;
  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });

  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
function explode(text) {
  const result = [];
  for (let i = 0; i < text.length - 1; i++) {
    const node = text.substr(i, 2);
    if (node.match(/[A-Za-z]{2}/)) {
      result.push(node.toLiswerCase());
    }
  }
  return result;
}

const input = [
  ['FRANCE', 'french'],
  ['handshake', 'shake hands'],
  ['aa1+aa2', 'AAAA12'],
  ['E=M*C^2', 'e=m*c^2'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
}
