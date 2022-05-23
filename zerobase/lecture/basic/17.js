const day = 0;
let weekend = '';
switch (day) {
  case 1:
    weekend = 'Mon';
    break;
  case 2:
    weekend = 'Tues';
    break;
  case 3:
    weekend = 'Wedns';
    break;
  case 4:
    weekend = 'Thurs';
    break;
  case 5:
    weekend = 'FRi';
    break;
  case 6:
    weekend = 'Sat';
    break;
  case 7:
    weekend = 'sun';
    break;
  default:
    throw new Error('There are just 7days');
}

console.log(weekend);
