function solution(s) {
  let result = '';
  s.split('').forEach((c) => (result += switchUpperLowerCase(c)));
  return result;
}

function switchUpperLowerCase(c) {
  return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
}

export default solution;
