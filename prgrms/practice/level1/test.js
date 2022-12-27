function solution(S) {
  // Implement your solution here
  const array = S.toString().split('');
  for (let i = 0; i < array.length - 1; i += 1) {
    if (S.charCodeAt(i) > S.charCodeAt(i + 1)) {
      return [...array.slice(0, i), ...array.slice(i + 1, array.length)].join(
        ''
      );
    }
  }
  return array.slice(0, array.length - 1).join('');
}

console.log(solution('codility'));
