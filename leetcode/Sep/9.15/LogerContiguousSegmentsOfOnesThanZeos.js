/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let oneAnswer = 0;
  let oneTemp = false;
  let zeroAnswer = 0;
  let zeroTemp = false;
  let tempAnswer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      if (oneTemp) {
        //전이 1이라면
        tempAnswer++;
      } else {
        tempAnswer = 1;
      }
      oneAnswer = oneAnswer < tempAnswer ? tempAnswer : oneAnswer;
      oneTemp = true;
      zeroTemp = false;
    } else {
      if (zeroTemp) {
        tempAnswer++;
      } else {
        tempAnswer = 1;
      }
      zeroAnswer = zeroAnswer < tempAnswer ? tempAnswer : zeroAnswer;
      zeroTemp = true;
      oneTemp = false;
    }
  }

  return zeroAnswer < oneAnswer;
};
