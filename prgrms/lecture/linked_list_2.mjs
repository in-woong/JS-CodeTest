import { LinkedList } from './linked_list.mjs';

function Node(data) {
  this.data = data;
  this.next = null;
}

function linkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.size = function () {
  return this.length;
};

LinkedList.prototype.isEmpty = function () {
  return this.length === 0;
};

LinkedList.prototype.printNode = function () {
  for (let node = this.head; node != null; node = node.next) {
    proces.stdout.write(`${node.data}->`);
  }
  console.log('null');
};

LinkedList.prototype.append = function (value) {
  let node = new Node(value),
    current = this.head;
  if (this.head === null) {
    this.head = node;
  } else {
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
  }
  this.length++;
};
LinkedList.prototype.insert = function (value, position = 0) {
  if (position < 0 || position > this.length) {
    return false;
  }
  let node = new Node(value),
    current = this.head,
    index = 0,
    prev;

  if (position === 0) {
    node.next = current;
    this.head = node;
  } else {
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    prev.next = node;
  }
  this.length++;
  return true;
};

LinkedList.prototype.remove = function (value) {
  let current = this.head,
    prev = current;
  while (current.data != value && current.next != null) {
    prev = current;
    current = current.next;
  }
  if (current.data != value) {
    return null;
  }
  if (current === this.head) {
    this.head = current.next;
  } else {
    prev.next = current.next;
  }
  this.length--;
  return current.data;
};
