//TODO: 다시 구현해보기
function Node(data) {
    this.data = data;
    this.next = null
}

function LinkedList() {
    this.head = null;
}

function solution(N, K) {
    let result = [];
    let ll = new LinkedList();
    let prev, current;
    for (let i = 1; i <= N; i++) {
        current = new Node(i);
        if (i == 1) {
            ll.head = current;
        } else {
            prev.next = current;
        }
        prev = current;
    }
    current.next = ll.head;
    current = ll.head;
    let Kcount = K
    while (--Kcount) {
        // console.log(count)
        prev = current;
        current = current.next;
    }
    console.log(current)


    let count;
    let size = N;
    while (size !== 1) {
        count = K;
        prev.next = current.next;
        console.log(current.data, prev.data, current.next.data)
        
        while (count--) {
            prev = current;
            current = current.next;
        }

        size--;
    }
    return current.data
}