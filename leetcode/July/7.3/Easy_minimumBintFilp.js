var minBitFlips = function (start, goal) {
  const startBinary = start.toString(2).split('');
  const goalBinary = goal.toString(2).split('');

  let len =
    startBinary.length < goalBinary.length
      ? goalBinary.length
      : startBinary.length;
  let count = 0;
  while (len > 0) {
    const s = startBinary.pop() || '0';
    const g = goalBinary.pop() || '0';
    if (s !== g) count++;
    len--;
  }

  return count;
};

var minBitFlips = function (start, goal) {
  let count = 0;
  for (let i = 0; i < 32; ++i) {
    if ((start & (1 << i)) !== (goal & (1 << i))) ++count;
  }

  return count;
};
