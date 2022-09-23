/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let node = head;
  let n = 1;
  while (node.next) {
    n++;
    node = node.next;
  }
  console.log(n);
  n = Math.floor(n / 2) + 1;
  let answer = head;
  let count = 1;
  while (count !== n) {
    answer = answer.next;
    count++;
  }
  return answer;
};
