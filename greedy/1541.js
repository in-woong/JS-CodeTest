//+와 - 괄호를 가지고 식을 만들고, 괄호를 지운다 그리고 괄호를 적당히 쳐서 값을 최소로 만들려고 한다.
// 괄호를 적절히 쳐서 최소로 만드는 프로그램 작성
// 식은 0~9, +, - 로만 이루어져 있다. 입력의 식의 길이는 <= 50

//ex 10-30-(24+39)-28 와 같이 음수가 나오면 다음 음수까지 싹 묶자

const fs = require('fs');

const input = fs.readFileSync('./data').toString().trim();
let count = 0;
let Num = '';
let minus = false;
for (let i of input.split('')) {
  if (i !== '-' && i !== '+') {
    Num += `${i}`;
  } else {
    if (i == '-') {
      //괄호가 열려있는 상태에서 마이너스가 나왔다. 괄호를 닫는다
      count += Number(Num);
      Num = '-';
      minus = true;
    } else if (minus == true && i == '+') {
      count += Number(Num);
      Num = '-';
      minus = true;
      //앞에 뺄셈이었고 괄호가 안닫혔다.현재는 플러스 즉 괄호를 연다
    } else if (minus == false && i == '+') {
      //괄호가 닫힌상태, 현재는 덧셈 괄호를 앞에 괄호를 닫는다.
      count += Number(Num);
      Num = '+';
      minus = false;
    }
  }
}

count += Number(Num);
console.log(count);
