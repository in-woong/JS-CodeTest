function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      answer.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      answer.push(arr2[i]);
    }
  }
  const set = new Set(answer);
  return [...set].sort((a, b) => a - b);
}
