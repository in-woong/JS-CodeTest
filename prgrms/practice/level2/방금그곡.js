let strings = 'C#C';
let big = 'CdDfF';
console.log(strings);
const str = strings.replace(/C#/i, 'c');
console.log(str);

console.log(big.includes(str));
