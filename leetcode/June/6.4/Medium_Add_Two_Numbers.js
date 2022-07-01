// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let values = [];
  let overflow = 0;
  while (l1.next || l2.next) {
    const value = (l1.val + l2.val + overflow) % 10;
    overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;
    l1 = l1.next || new ListNode(0);
    l2 = l2.next || new ListNode(0);
    values.push(value);
  }
  const value = (l1.val + l2.val + overflow) % 10;
  overflow = l1.val + l2.val + overflow >= 10 ? 1 : 0;

  values.push(value);
  console.log(overflow);
  if (overflow == 1) {
    values.push(1);
  }
  let node;
  values.reverse().forEach((item, idx) => {
    if (idx == 0) {
      node = new ListNode(item);
    } else {
      node = new ListNode(item, node);
    }
  });
  return node;
};
// const input = [
//   [
//     [2, 4, 3],
//     [5, 6, 4],
//   ],
//   [[0], [0]],
//   [
//     [9, 9, 9, 9, 9, 9, 9],
//     [9, 9, 9, 9],
//   ],
// ];

// for (let i = 0; i < input.length; i++) {
//   console.log(`${i + 1}: ${solution(input[i][0], input[i][1])}`);
// }
