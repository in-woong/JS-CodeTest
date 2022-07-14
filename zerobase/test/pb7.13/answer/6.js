function solution(arr, fee) {
  let result = 0;

  arr.forEach((num) => {
    result += getNumWithApplyEvent(num) * fee;
  });

  return result;
}

function getNumWithApplyEvent(num) {
  return num - Math.floor(num / 5);
}

export default solution;
