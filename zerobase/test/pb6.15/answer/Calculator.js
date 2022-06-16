// [문제 설명]
//  문자열 계산식을 입력받는 계산기를 만들려고 합니다. 계산식은 덧셈(+), 뺄셈(-), 숫자로만 이루어져 있습니다.
//  계산식 s가 주어질 때, 계산식의 계산 결과를 출력하는 함수, solution을 완성해주세요.

//  예를 들어, s가 `-3+26-7`로 주어질 때, 계산식의 계산 결과는 16 (-3 + 26 -7)입니다.

// [제한 사항]
//  - 계산식은 덧셈(+), 뺄셈(-), 숫자로만 이루어져 있습니다.

// [입력 형식]
//  - s는 길이가 1 이상 10 이하의 문자열입니다.

// [출력 형식]
//  - 계산식의 계산 결과를 출력합니다.

function solution(s) {
  const nums = []; // 숫자 저장 공간
  const ops = []; // 문자열 저장 공간
  save(s, nums, ops);

  return calc(nums, ops);
}

function save(s, nums, ops) {
  let i = 0;
  let tmpNum = '';
  while (i < s.length) {
    const c = s.charAt(i);

    if (isNumber(c)) {
      tmpNum += c;
    } else {
      if (i === 0) {
        nums.push(0);
        ops.push(c);
      } else {
        nums.push(Number(tmpNum));
        ops.push(c);
      }
      tmpNum = '';
    }

    i++;
  }

  // 마지막 남은 숫자 추가
  nums.push(Number(tmpNum));
}

function calc(nums, ops) {
  if (nums.length === 1) return nums[0];

  const num1 = nums.shift();
  const num2 = nums.shift();

  const calcNum = ops.shift() === '+' ? add(num1, num2) : sub(num1, num2);
  nums.unshift(calcNum);
  return calc(nums, ops);
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function isNumber(c) {
  const charCode = c.charCodeAt(0);
  return 48 <= charCode && charCode <= 57;
}

solution;
