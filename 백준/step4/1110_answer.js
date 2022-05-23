// 1의 자리수 :num %10
// 10의 자리수 // Math.floor(num/10)
// 1의자리 수로 10의 자리수 만들기 : (num%10)*10

let input = Number(require("fs").readFileSync("./data").toString());

let num = input;
let sum;
let i = 0;

while (1) {
  i++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (input === num) {
    break;
  }
}

console.log(i);
