// function solution(arr, i) {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   const array = [];
//   for (let i = min; i <= max; i++) {
//     array.push(i);
//   }
//   const selectArray = combination(array, i);
//   let answer = Infinity;
//   for (let i = 0; i < selectArray.length; i++) {
//     //selectArray의 i번째 선택
//     let temp = 0;
//     for (let j = 0; j < arr.length; j++) {
//       //array의 j번째 값에대하여
//       let tempArray = [];
//       for (let k = 0; k < selectArray[i].length; k++) {
//         //selectArray 중에 제일 오차가 작은 값을 선택하는 과정
//         tempArray.push(Math.pow(selectArray[i][k] - arr[j], 2));
//       }
//       const min = Math.min(...tempArray);

//       temp += min;
//     }

//     answer = answer > temp ? temp : answer;
//   }

//   return answer;
// }

// function combination(arr, n) {
//   if (n == 1) return arr.map((v) => [v]);
//   const result = [];

//   arr.forEach((fixed, idx, arr) => {
//     const rest = arr.slice(idx + 1);
//     const combins = combination(rest, n - 1);
//     const combine = combins.map((v) => [fixed, ...v]);
//     result.push(...combine);
//   });
//   return result;
// }


function solution(arr, i) {
    arr.sort();

    //dp[start][n]를 start부터 시작하여, n단계로 단계를 나누었을 때 최솟값
    const dp = Array.from({ length: arr.length }, () => new Array(i + 1).fill(-1));

    return recursiveQuery(arr, 0, i, dp)
}

function recursiveQuery(arr, start, level, dp) {
    if (level === 1) return firstLevel(arr, start, arr.length - 1);

    if (dp[start][level] !== -1) return dp[start][level]
    let answer = Infinity;

    for (let end = start + 1; end < arr.length - level + 1; end++) {
        answer = Math.min(answer, firstLevel(arr, start, end - 1) + recursiveQuery(arr, end, level - 1, dp))

    }

    dp[start][level] = answer;
    return answer;
}

function firstLevel(arr, start, end) {
    // const sum = arr.slice(start, end + 1).reduce((acc, cur) => acc + cur, 0);

    // const n = arr.length;
    // const avg = Math.round(sum / n);

    // let answer = 0;
    // for (let i = start; i <= end; i++) {
    //     answer += Math.pow(avg - arr[i], 2)
    // }

    let cnt = 0;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] !== 0) {
            sum += arr[i];
            cnt++;
        }
    }

    const avg = Math.round(sum / cnt);
    let error = 0;
    for (let i = start; i <= end; i++) {
        if (arr[i] !== 0) {
            error += Math.pow(avg - arr[i], 2);
        }
    }

    return error;
}