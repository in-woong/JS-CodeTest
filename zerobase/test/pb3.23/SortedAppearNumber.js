// [문제 설명]
//  숫자로 이루어진 문자열 s가 있습니다. 이때 가장 많이 들어온 숫자 순서대로 출력하는 함수, solution을 완성해주세요.
//  단, 들어온 횟수가 같은 경우에는 작은 수를 먼저 출력합니다.

//  예를 들어, s가 '221123'으로 주어질 때, 출력 결과는 '2 1 3 0 4 5 6 7 8 9'입니다.


// [입력 형식]
//  - s는 길이가 1 이상 100,000 이하의 문자열입니다.
//  - s는 숫자로 구성됩니다.


// [출력 형식]
//  - 가장 많이 들어온 숫자 순서대로 공백으로 구분하여 출력합니다.

/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const countedArr = getCountedArr(s);
  const orders = getBiggerOrders(countedArr);
  return orders.join(' ');
}

function getCountedArr(s) {
  const result = new Array(10).fill(0)
  for (let i = 0; i < s.length; i++) {
    result[s[i]]++;
  }
  return result;
}

function getBiggerOrders(arr) {
  const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let high = 1; high < arr.length; high++) {
    for (let low = 0; low < high; low++) {
      if (arr[low] < arr[high]) {
        switching(arr, low, high);
        switching(order, low, high);
      } else if (arr[low] === arr[high] && order[low] > order[high]) {
        switching(order, low, high);
      }
    }
  }
  return order;
}

function switching(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

solution
