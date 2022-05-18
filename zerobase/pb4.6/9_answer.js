function solution(arr) {
  const trie = new Trie();
  for (let word of arr) {
    trie.insert(word);
  }
  return trie.getShortestClassifiablePrefixLength();
}

class Node {
  constructor() {
    this.cnt = 0;
    this.child = {};
  }
  getShortestClassifiablePrefixLength() {
    if (this.cnt === 1) {
      return 0;
    }
    let maximumLength = 0;
    for (let c in this.child) {
      maximumLength = Math.max(
        maximumLength,
        this.child[c].getShortestClassifiablePrefixLength()
      );
    }
    return maximumLength + 1;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let curNode = this.root;

    for (let c of word) {
      if (!curNode.child[c]) {
        curNode.child[c] = new Node();
      }
      curNode = curNode.child[c];
      curNode.cnt += 1;
    }
  }

  getShortestClassifiablePrefixLength() {
    return this.root.getShortestClassifiablePrefixLength();
  }
}
const input = [
  ['a', 'ab', 'def', 'dec', 'efgh'],

  ['a'],

  ['a', 'b'],

  ['a', 'aa'],

  ['abcde', 'aa', 'a', 'bcd', 'bdbb'],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i])}`);
}
