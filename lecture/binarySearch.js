const array = [0, 1, 5, 124, 400, 599, 1004, 2879, 8712];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  console.log('first', left, right, mid);
  while (left <= right) {
    if (array[mid] === findValue) {
      console.log(mid);
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
    console.log(left, right, mid);
  }
  console.log(-1);
  return -1;
}

binarySearch(array, 1);
binarySearch(array, 1);
