// /**
//  * @param {string} s
//  * @return {number}
//  */
// var numberOfWays = function (s) {
//   const sArray = s.split('');
//   const ans = [];
//   let co = 0;
//   function count(array, answer) {
//     if (answer.length == 3) {
//       co++;
//       return;
//     }
//     for (let i = 0; i < array.length; i++) {
//       if (!answer.length) {
//         count(array.slice(i + 1), [array[i]]);
//       } else {
//         if (array[i] !== answer[answer.length - 1]) {
//           count(array.slice(i + 1), [...answer, array[i]]);
//         }
//       }
//     }
//   }

//   count(sArray, ans);
//   return co;
// };

var numberOfWays = function(s) {
    const n = s.length;

    let validWays = 0;

    let postFixOnes = 0;
    let postFixZeros = 0;

    for (let i = 0; i < n; ++i) {
        const bit = s.charAt(i);

        if (bit === "1") ++postFixOnes;
        else ++postFixZeros;
    }

    let prefixOnes = 0;
    let prefixZeros = 0;

    for (let i = 0; i < n; ++i) {
        const bit = s.charAt(i);

        if (bit === "1") {
            --postFixOnes;
            validWays += (prefixZeros * postFixZeros);
            ++prefixOnes;
        }
        else {
            --postFixZeros;
            validWays += (prefixOnes * postFixOnes);
            ++prefixZeros;
        }
    }

    return validWays;
};

var numberOfWays = function (s) {
  const n = s.length;

  let validWays = 0;

  let postFixOnes = 0;
  let postFixZeros = 0;

  for (let i = 0; i < n; ++i) {
    const bit = s.charAt(i);

    if (bit === '1') ++postFixOnes;
    else ++postFixZeros;
  }

  let prefixOnes = 0;
  let prefixZeros = 0;

  for (let i = 0; i < n; ++i) {
    const bit = s.charAt(i);

    if (bit === '1') {
      --postFixOnes;
      validWays += prefixZeros * postFixZeros;
      ++prefixOnes;
    } else {
      --postFixZeros;
      validWays += prefixOnes * postFixOnes;
      ++prefixZeros;
    }
  }

  return validWays;
};
