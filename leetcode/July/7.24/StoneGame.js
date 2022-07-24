// https://velog.io/@timevoyage/LeetCode-1690-Stone-Game-VII

/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  let len = stones.length;
  let dp = new Array(len).fill(0).map((item) => new Array(len).fill(0));

  let prefix = new Array(len + 1).fill(0);
  stones.map((val, ind) => (prefix[ind + 1] = prefix[ind] + stones[ind]));

  //final turn
  let turn = len % 2 == 1;

  for (let k = 1; k < len; k++) {
    let i = 0,
      j = k;
    while (i < len && j < len) {
      if (turn == 0) {
        //alice
        dp[i][j] = Math.max(
          dp[i + 1][j] + prefix[j + 1] - prefix[i + 1],
          dp[i][j - 1] + prefix[j] - prefix[i]
        );
      } else {
        //bob
        dp[i][j] = Math.min(
          dp[i + 1][j] - (prefix[j + 1] - prefix[i + 1]),
          dp[i][j - 1] - (prefix[j] - prefix[i])
        );
      }
      i++;
      j++;
    }
    turn = turn ^ 1;
  }
  return dp[0].pop();
};

const stoneGameVII = (stones) => {
  let n = stones.length;
  let dp = Array(n + 1).fill(0);
  for (let i = n - 2; i >= 0; i--) {
    let total = stones[i];
    for (let j = i + 1; j < n; j++) {
      console.log(i, j, 'sum', total, dp);
      total += stones[j];
      dp[j] = Math.max(
        total - stones[i] - dp[j],
        total - stones[j] - dp[j - 1]
      );
    }
  }
  return dp[n - 1];
};

// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// /**
//  * Returns sum between start index & end index
//  */
//  const getSum = (start, end, prefixSums) => {
//     return prefixSums[end + 1] - prefixSums[start];
// }

// /**
//  * calculates optimal diff between start index & end index
//  **/
// const calculateDiff = (start, end, prefixSums, dp) => {
//     console.log(dp)
//     if (start === end) {
//         // if start & end is the same diff would always be 0 as the player would remove the stone and score won't change.
//         return 0;
//     }

//     if (!dp[start]) {
//         dp[start] = [];
//     }

//     if (!dp[start][end]) {
//         dp[start][end] = Math.max(
//             getSum(start + 1, end, prefixSums) - calculateDiff(start + 1, end, prefixSums, dp),
//             getSum(start, end - 1, prefixSums) - calculateDiff(start, end - 1, prefixSums, dp)
//         );
//     }

//     return dp[start][end];
// }

// /**
//  * @param {number[]} stones
//  * @return {number}
//  */
// var stoneGameVII = function(stones) {
//     // First calculate prefix sums
//     const prefixSums = [0];
//     for (let i = 1;i <= stones.length;i++) {
//         prefixSums[i] = stones[i - 1] + prefixSums[i - 1];
//         console.log(prefixSums)
//     }

//     // Now calculate optimal diff between 0 and stones.length - 1
//     return calculateDiff(0, stones.length - 1, prefixSums, []);
// };
