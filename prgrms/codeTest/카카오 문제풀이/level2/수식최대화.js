// function solution(expression) {
//   let result = 0;
//   const digits = expression.match(/([-+*])/g);
//   const array = expression.split(/([-+*])/);

//   const digitSet = [...new Set(digits)];
//   const digitPerms = permutation(digitSet, digitSet.length);

//   for (let i = 0; i < digitPerms.length; i++) {
//     const digitSorted = digits.sort(
//       (a, b) => digitPerms[i].indexOf(a) - digitPerms[i].indexOf(b)
//     );

//     const tempArray = array.slice();
//     for (let j = 0; j < digitSorted.length; j++) {
//       calc(digitSorted[j], tempArray);
//     }
//     console.log(tempArray);
//     result = result < Math.abs(tempArray[0]) ? Math.abs(tempArray[0]) : result;
//   }

//   return result;
// }

// function calc(digitPerm, array) {
//   let i = 0;
//   while (true) {
//     // console.log(array);
//     if (digitPerm == array[0]) {
//       const beforeDigit = Number(array.pop());
//       const nowDigit = array.shift();
//       const afterDigit = Number(array.shift());
//       let temp;
//       if (nowDigit == '+') {
//         temp = beforeDigit + afterDigit;
//       } else if (nowDigit == '-') {
//         temp = beforeDigit - afterDigit;
//       } else if (nowDigit == '*') {
//         temp = beforeDigit * afterDigit;
//       }

//       array.push(temp);
//       return;
//     } else {
//       array.push(array.shift());
//     }
//   }
// }

function permutation(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  let result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.filter((_, i) => i !== idx);
    const perms = permutation(rest, n - 1);
    const combins = perms.map((v) => [fixed, ...v]);
    result.push(...combins);
  });

  return result;
}

function solution(expression) {
  let answer = 0;
  const mathExp = ['*', '+', '-'];
  let priorityArr = permutation(mathExp, 3);
  const calculated = [];
  for (const priority of priorityArr) {
    const expressionArr = expression.split(/(\D)/);
    for (const exp of priority) {
      
      while (expressionArr.includes(exp)) {
        const index = expressionArr.indexOf(exp);
        expressionArr.splice(
          index - 1,
          3,
          eval(expressionArr.slice(index - 1, index + 2).join(''))
        );
      }
    }

    calculated.push(Math.abs(expressionArr[0]));
  }
  answer = Math.max(...calculated);
  return answer;
}

const input = [
  '100-200*300-500+20',
  '50*6-3*2',
  '1+2+3',
  '0+3*4-1',
  '200-300-500-600*40+500+500',
  '177-661*999*99-133+221+334+555-166-144-551-166*166-166*166-133*88*55-11*4+55*888*454*12+11-66+444*99',
  '2-990-5+2',
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
