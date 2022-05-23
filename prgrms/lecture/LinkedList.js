class Node {
  constructor(value) {
      //값
    this.value = value;
    //포인터
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
      //노드를 엮어주는 역할 만 한다.List에서의 head, tail과 value, next는 아예 다른 개념
    this.head = null;
    this.tail = null;
  }

  find(value) {
      //처음에 있다고 가르켜진 노드가 현재노드다, 이때 노드는 value와 next로 이루어 져있다.
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
      //들어온 값을 새 노드로 생성하고, next에 어떤 값을 넣어줄 지 생각해야한다.
    const newNode = new Node(newValue);
    //만약 head가 null 아무것도 없다면 
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }
//preNode가 내가 찾던 노드의 전 노드이다.
//따라서 preNode.next == preNode.next.next로 바꾸어 버리면 끝
    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = '[';
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substr(0, displayString.length - 2);
    displayString += ']';
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.display();
// linkedList.append(2);
// linkedList.append(3);
// linkedList.append(5);
// linkedList.display();
// console.log(linkedList.find(3));
// linkedList.remove(3);
// linkedList.display();
// linkedList.insert(linkedList.find(2), 10);
// linkedList.display();
