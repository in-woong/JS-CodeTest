function solution(head) {
  if (!head) return head;
  let result = [];
  while (head.next) {
    if (result.length == 0) {
      result.push(head.val);
    } else if (result[result.length - 1] != head.val) {
      result.push(head.val);
    }
    head = head.next;
  }
  if (result[result.length - 1] !== head.val) {
    result.push(head.val);
  }

  result = result.reverse();
  let node;
  result.forEach((item, idx) => {
    if (idx == 0) {
      node = new ListNode(item);
    } else {
      node = new ListNode(item, node);
    }
  });

  return node;
}
