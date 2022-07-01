// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function solution() {
  const input = [];

  const array = [];
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  }

  while (list1.next) {
    array.push(list1.val);
    list1 = list1.next || new ListNode(0);
  }
  while (list2.next) {
    array.push(list2.val);
    list2 = list2.next || new ListNode(0);
  }
  array.push(list1.val);
  array.push(list2.val);
  array.sort((a, b) => a - b).reverse();
  let node;
  array.forEach((x) => {
    node = new ListNode(x, node);
  });
  return node;
}

const input = [];

for (let i = 0; i < input.length; i++) {
  console.log(`${i + 1}: ${solution(input[i])}`);
}
