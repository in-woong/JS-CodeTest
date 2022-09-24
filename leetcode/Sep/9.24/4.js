function solution(numbers) {
  const answer = [];
  for (const number of numbers) {
    const array = number
      .toString(2)
      .split('')
      .map((v) => +v);
    console.log(array);
  }
}
