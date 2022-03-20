function dfs(startIndex, numbers, target) {
  return (function dfsRecursive(num, index) {
    if (index === numbers.length) {
      if (num === target) {
        return 1;
      } else {
        return 0;
      }
    }
    let num1 = num + numbers[index];
    let num2 = num - numbers[index];

    return dfsRecursive(num1, index + 1) + dfsRecursive(num2, index + 1);
  })(0, startIndex);
}

class Queue {
  constructor() {
    this.item = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.item[this.rear++] = value;
  }

  dequeue() {
    const value = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return value;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
}

function bfs(startIndex, numbers, target) {
  const queue = new Queue();
  queue.enqueue([numbers[startIndex], -numbers[startIndex]]);
  let index = startIndex + 1;
  let answer = 0;
  while (!queue.isEmpty()) {
    let list = queue.dequeue();

    if (index !== numbers.length) {
      let newList = [];
      for (let num of list) {
        newList.push(num + numbers[index]);
        newList.push(num - numbers[index]);
      }
      index++;
      queue.enqueue(newList);
    } else { 
      for (let num of list) {
        if (num === target) {
          answer++;
        }
      }
    }
  }
  return answer;
}

function solution(numbers, target) {
  //   let answer = dfs(0, numbers, target);
  let answer = bfs(0, numbers, target);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
