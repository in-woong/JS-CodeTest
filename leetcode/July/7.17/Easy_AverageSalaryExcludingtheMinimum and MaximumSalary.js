var average = function (salary) {
  const min = Math.min(...salary);
  const max = Math.max(...salary);
  let sum = salary.reduce((acc, cur) => acc + cur, 0);

  return (sum - max - min) / (salary.length - 2);
};
