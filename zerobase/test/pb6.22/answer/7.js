function solution(stock) {
  let downMarks = countDownMarks(stock);
  console.log(downMarks);
  let newArray, newDownMarks, start, end;

  if (downMarks.length == 1 || downMarks.length == 2) {
    newArray = stock.slice(0);

    start = downMarks.shift();
    end = downMarks.length ? downMarks.shift() + 1 : start + 1;

    swap(newArray, start, end);
    newDownMarks = countDownMarks(newArray);
    if (!newDownMarks.length) {
      return 1;
    }
  }

  if (
    downMarks.length > 2 &&
    downMarks.length == downMarks[downMarks.length - 1] - downMarks[0] + 1
  ) {
    start = downMarks.shift();
    end = downMarks.pop() + 1;
    console.log(start, end);
    newArray = reverse(stock, start, end);
    newDownMarks = countDownMarks(newArray);
    if (!newDownMarks.length) {
      return 1;
    }
  }
  return 0;
}

function swap(array, idx1, idx2) {
  let tmp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = tmp;
}

function reverse(array, idx1, idx2) {
  return array
    .slice(0, idx1)
    .concat(array.slice(idx1, idx2 + 1).reverse())
    .concat(array.slice(idx2 + 1));
}

function countDownMarks(array) {
  let downMarks = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      downMarks.push(i);
    }
  }
  return downMarks;
}

const input = [
  [3, 1, 2],
  [4, 2],
  [1, 2, 5, 8, 9, 3, 4],
  [1, 2, 8, 4, 5, 9, 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}:${solution(input[i])}`);
}
