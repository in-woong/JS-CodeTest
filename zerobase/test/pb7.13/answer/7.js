function solution(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr1[i]);
      }
    }
  }

  const difference = [];
  difference.push(...getDiff(arr1, intersection));
  difference.push(...getDiff(arr2, intersection));

  difference.sort((a, b) => a - b);
  return difference;
}

function getDiff(arr, ignore) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isIntersection = false;
    for (let j = 0; j < ignore.length; j++) {
      if (arr[i] === ignore[j]) {
        isIntersection = true;
      }
    }
    if (!isIntersection) {
      result.push(arr[i]);
    }
  }
  return result;
}
