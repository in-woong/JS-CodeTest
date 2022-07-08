var numDifferentIntegers = function (word) {
  let chars = /[a-z]/g,
    remZeros = /^[0]*/g,
    set = new Set();
  let arr = word
    .replace(chars, ' ')
    .split(' ')
    .map((val) => {
      if (val != '') {
        let newval = val.replace(remZeros, '');
        set.add(newval);
      }
    });

  return set.size;
};
