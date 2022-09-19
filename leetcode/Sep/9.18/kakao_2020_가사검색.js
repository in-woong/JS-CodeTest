// function solution(words, queries) {
//     const answer=[];
//     const trie = new Trie()
//     for()
//     for(let i=0;i<queries.length;i++){
//         const query=queries[i];
//         let num=0;
//         for(let j=0;j<words.length;j++){
//             const word= words[j];
//             if(word.length!==query.length)continue;
//             for(let n=0;n<word.length;n++){
//                 if(query[n]=="?"){
//                     if(n==word.length-1)num++;
//                     continue;
//                 }
//                 if(word[n]!==query[n])break;
//                 if(n==word.length-1)num++;
//             }
//         }
//         answer.push(num);
//     }
//     return answer;
// }

function TrieNode() {
  this.children = {};
  this.isEndOfWord = false;
  this.count = 0;
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
    current.count++;
    current = node;
  }
  current.endOfWord = true;
};

Trie.prototype.search = function (word) {
  let current = this.root;

  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (ch == '?') return current.count;

    let node = current.children[ch];
    if (node == undefined) {
      return 0;
    }
    current = node;
  }
  return current.count;
};

function solution(words, queries) {
  const frontTrie = Array.from({ length: 10001 }, () => new Trie());
  const rearTrie = Array.from({ length: 10001 }, () => new Trie());
  const answer = [];

  for (let word of words) {
    const n = word.length;
    frontTrie[n].insert(word);
    rearTrie[n].insert(word.split('').reverse().join(''));
  }
  for (let query of queries) {
    const n = query.length;
    if (query[0] !== '?') {
      //물음표로 시작하지 않는것
      answer.push(frontTrie[n].search(query));
    } else {
      //물음표로 시작하는것
      answer.push(rearTrie[n].search(query.split('').reverse().join('')));
    }
  }
  return answer;
}
