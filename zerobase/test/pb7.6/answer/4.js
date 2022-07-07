function solution(arr1, arr2) {
  const intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        intersection.push(arr[i]);
      }
    }
  }

  intersection.sort((a, b) => a - b);
  return intersection;
}
