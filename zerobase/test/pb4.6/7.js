// function solution(S) {
//   const string = S.match(/[\+\-\*\/\(\)]/gi);
//   const digit = S.match(/\d+/gi);

//   let temp = '';
//   let result = digit[0];
//   digit.shift();
//   console.log(string, digit, result);
//   for(let i =0; i<string.length; i++){
//       if(string[i]=="+" || string[i]=="-"){
//           temp+=string[i]
//           result+=digit[i]
//       }else if(string[i]=="*"||string[i]=="/"){
//           if(string[i+1]=="("||string[i+1])
//       }
//   }
// }

console.log(solution('1 + 2 * 3 * ( 2 + 3 )'));
