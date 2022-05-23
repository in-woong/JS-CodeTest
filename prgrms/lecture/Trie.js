function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}

function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }

    current = node;
  }
  current.endOfWord = true;
};

Trie.prototype.search = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];

    if (node === undefined) {
      return false;
    }
    current = node;
  }
  return current.endOfWord;
};

Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;
    //삭제해도 되면 true, 안되면 false
    return Object.keys(current.children).length === 0;
  }

  let ch = word[index];
  let node = current.children[ch];

  if (node === undefined) return false;
  //한단계 아래에서 삭제해도 되고 지금 단어가 끝이 마지막인 단어가 없으면
  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }
};
let trie = new Trie();

trie.insert('be');
trie.insert('bee');
trie.insert('can');
trie.insert('cat');
trie.insert('cd');
trie.insert('dog');
console.log(trie.root.children['b']);

console.log(trie.search('bear'));
console.log(trie.search('bee'));
trie.delete('bear');
console.log(trie.search('bee'));
trie.delete('b');
console.log(trie.search('bee'));
trie.delete('bee');
console.log(trie.search('bee'));
