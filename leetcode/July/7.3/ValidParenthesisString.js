// var checkValidString = function(s) {

// const validString= function (index, count){
//     if(s.length ==index){
//         return count==0
//     };
//     if(count<0)return false;
//     if(s.charAt(index)=="("){
//         return validString(index+1, count+1)
//     }else if (s.charAt(index)==")"){
//         return validString(index+1, count-1)
//     }else{
//         return validString(index+1,count+1)||validString(index+1,count-1)||validString(index+1,count)
//     }

// }
// return validString(0,0)

// };
// var checkValidString = function(s) {
//     return validStringHelper(s, 0, 0)
// };

// function validStringHelper(str, index, count) {
//     if (index === str.length) return count === 0
//     if (count < 0) return false

//     if (str.charAt(index) === '(') {
//         return validStringHelper(str, index + 1, count + 1);
//     }
//     if (str.charAt(index) === ')') {
//         return validStringHelper(str, index + 1, count - 1);
//     }
//     return validStringHelper(str, index + 1, count) || validStringHelper(str, index + 1, count + 1) || validStringHelper(str, index + 1, count - 1);
// }

var checkValidString = function (s) {
  if (!s.length) return true;
  // dp[start][length] = isValid(s.substr(start,length))
  let dp = new Array(s.length)
    .fill(0)
    .map((x) => new Array(s.length + 1).fill(false));
  for (let i = 0; i < s.length; i++) {
    dp[i][0] = true;
    dp[i][1] = s[i] === '*' ? true : false;
  }
  for (let length = 2; length <= s.length; length++) {
    for (let start = 0; start <= s.length - length; start++) {
      let end = start + length - 1;
      // paire
      if (s[start] === '(' || s[start] === '*') {
        if (s[end] === '*' || s[end] === ')') {
          dp[start][length] = dp[start][length] || dp[start + 1][length - 2];
        }
      }
      // two parts
      for (let len1 = 1; len1 < length; len1++) {
        dp[start][length] =
          dp[start][length] ||
          (dp[start][len1] && dp[start + len1][length - len1]);
      }
    }
  }
  return dp[0][s.length];
};

const checkValidString = (s) => {
  let lo = 0;
  let hi = 0;

  for (const c of s) {
    lo += c === '(' ? 1 : -1;
    hi += c !== ')' ? 1 : -1;
    if (hi < 0) break;
    lo = Math.max(lo, 0);
  }

  return lo === 0;
};
