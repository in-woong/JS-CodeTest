var isSubsequence = function (s, t) {
  let tArray = t.split('');
  const sArray = s.split('');
  for (let i = 0; i < sArray.length; i++) {
    console.log(tArray, sArray[i]);
    if (tArray.indexOf(sArray[i]) > -1) {
      const index = tArray.indexOf(sArray[i]);
      tArray = tArray.slice(index + 1);
    } else {
      return false;
    }
  }
  return true;
};
