const l1 = [2, 4, 3, 5];
const l2 = [5, 6, 4];

// class singleListNode {
//   constructor() {
//     this.value = value;
//     this.next = null;
//   }
// }

// function addTwoNumber(list1, list2){
//     const firstList = new singleListNode();
//     for(number in list1){

//     }
// }

function addTwoNumber(list1, list2) {
  const length = Math.max(list1.length, list2.length);
  let over = 0;
  let answer = [];
  for (let i = 0; i < length; i++) {
    if ((l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0) >= 10) {
      answer.push((l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0) + over - 10);
      over = 1;
    } else {
      answer.push((l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0) + over);
      over = 0;
    }
  }
  console.log(answer);
}

addTwoNumber(l1, l2);
