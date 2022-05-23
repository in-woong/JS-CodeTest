const fs = require('fs');
let [n, ...arr] = fs.readFileSync('./data').toString().trim().split('\n');

arr = arr.map((v) => v.split(' ').map((vv) => parseInt(vv) || vv)).sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] > b[1]) return -1;
  else {
    if (a[2] > b[2]) return 1;
    else if (a[2] < b[2]) return -1;
    else {
      if (a[3] < b[3]) return 1;
      else if (a[3] > b[3]) return -1;
      else {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
      }
    }
  }
});
const names = [];
arr.forEach(v=> names.push(v[0]));
console.log(names.join("\n"))