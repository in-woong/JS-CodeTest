/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  const titleArray = title.split(' ');
  const array = [];
  for (let i = 0; i < titleArray.length; i++) {
    let temp = '';
    if (titleArray[i].length > 2) {
      temp += titleArray[i][0].toUpperCase();
      for (let j = 1; j < titleArray[i].length; j++) {
        temp += titleArray[i][j].toLowerCase();
      }
    } else {
      temp += titleArray[i].toLowerCase();
    }
    console.log(temp);
    array.push(temp);
  }
  return array.join(' ');
};

//Runtime: 134 ms, faster than 5.60% of JavaScript online submissions for Capitalize the Title.
//Memory Usage: 45.9 MB, less than 6.00% of JavaScript online submissions for Capitalize the Title.