var canConstruct = function (ransomNote, magazine) {
  const arr = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr.indexOf(ransomNote[i]) === -1) {
      return false;
    } else {
      arr.splice(arr.indexOf(ransomNote[i]), 1);
    }
  }
  return true;
};
