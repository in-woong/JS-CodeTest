// [문제 설명]
//  질병에 걸린 환자 여러 명이 있습니다. 이 환자들을 심각도에 따라 여러 단계로 나누어 그룹 지어 관리하려고 합니다.
//  환자의 심각도를 나타내는 수치 p의 배열 arr가 주어지고, 환자의 심각도에 따라 나눌 단계 l이 주어질 때, 다음과 같은 규칙을 바탕으로 오차 제곱의 합 최소치를 구하는 함수, solution을 완성해주세요.

//  예를 들어, arr로 [1, 2, 3, 5, 5, 5]가 있고, l이 2라고 가정할 때, 오차 제곱의 합의 결과는 다음과 같습니다.

//  > [1, 2, 3, 5, 5, 5]를 [1, 1, 1, 5, 5, 5]로 두 단계로 나누면, 각 오차는 [0, 1, 2, 0, 0, 0]이고, 오차의 제곱은 [0, 1, 4, 0, 0, 0]이며 오차 제곱의 합은 5입니다.
//  > [1, 2, 3, 5, 5, 5]를 [2, 2, 2, 5, 5, 5]로 두 단계로 나누면, 각 오차는 [-1, 0, 1, 0, 0, 0]이고, 오차의 제곱은 [1, 0, 1, 0, 0, 0]이며 오차 제곱의 합은 2입니다.

//  이때, 오차 제곱의 합의 최소치는 2입니다.


// [제한 사항]
//  - l의 값은 arr의 길이보다 크지 않습니다.


// [입력 형식]
//  - 환자의 심각도를 나타내는 수치 p는 1 이상 1000 이하의 정수입니다.
//  - arr는 길이가 1 이상 100 이하인 배열입니다.
//  - 단계 l은 1 이상 10 이하의 정수입니다.


// [출력 형식]
//  - 환자의 심각도에 따라 단계를 나눴을 때, 오차 제곱의 합의 최소치를 출력합니다.


/**
 * @param arr {number[]}
 * @param l {number}
 * @return {number}
 */
function solution(arr, l) {
  arr.sort();

  const dp = Array.from(Array(arr.length), () => new Array(l + 1).fill(-1));

  return patientQuantization(arr, 0, l, dp);
}

const INF = 1000000;

function patientQuantization(arr, start, divideCnt, dp) {
  // 기저사례
  if (divideCnt === 1) return calcError(arr, start, arr.length - 1);

  if (dp[start][divideCnt] !== -1) return dp[start][divideCnt];

  let ret = INF;
  for (let next = start + 1; next <= arr.length - (divideCnt - 1); next++) {
    ret = Math.min(ret, calcError(arr, start, next - 1) + patientQuantization(arr, next, divideCnt - 1, dp));
  }

  dp[start][divideCnt] = ret;
  return ret;
}

function calcError(arr, start, end) {
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

solution
