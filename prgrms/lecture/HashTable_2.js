const HASH_SIZE = 1013;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  //djb2 hash function
  let hash = 5381; //seed
  //loselosehash방식
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key:${key}=> indx:${index}`);
  //선형조사법 해시테이블
  if (this.table[index] !== undefined) {
    return false;
  }
  this.table[index] = new Element(key, value);
  this.length++;
  return true;
};

HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }

  return element;
};

HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

HashTable.prototype.size = function () {
  return this.length;
};

HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' ->' + this.table[i].key + ':' + this.table[i].value);
    }
  }
};

const hash = new HashTable();
// console.log(hash.hashCode('something'));
// console.log(hash.hashCode('KEYsss'));

// hash.put('Ana', 172);
// hash.put('Sue', 163);
// hash.put('Paul', 190);
// console.log(hash);
// console.log(hash.remove('Paul'));
// console.log(hash.remove('Paul'));
// console.log(hash);

// hash.print();
// console.log(hash.getBuffer());
// console.log(hash.size());
// hash.clear();
// console.log(hash);

hash.put('Ana', 172);
hash.put('Donnie', 183);
hash.put('Sue', 163);
hash.put('Jamie', 168);
hash.put('Paul', 190);
console.log('');
console.log(hash.size());
hash.print();
