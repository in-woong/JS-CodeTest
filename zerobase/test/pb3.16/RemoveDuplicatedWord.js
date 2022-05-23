// [문제 설명]
//  문자열에 연속한 2개의 같은 문자가 존재하지 않도록 만들고 싶습니다. 연속한 2개의 같은 문자가 존재한다면 이 문자를 지우고 남은 문자열을 이어 붙입니다. 이 과정을 연속한 2개의 같은 문자가 없을 때까지 반복하면 목표한 문자열을 얻게 됩니다.
//  문자열 s가 주어질 때, 위와 같은 과정을 적용해서 나오는 문자열을 출력하는 함수, solution을 완성해주세요.

// [입력 형식]
//  - s는 길이가 1 이상 100,000 이하의 문자열입니다.
//  - s는 알파벳 소문자로만 이루어져 있습니다.

// [출력 형식]
//  - 중복을 제거한 문자열을 출력합니다.

function solution(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack;
}

console.log(solution('bbbbbbb'));
