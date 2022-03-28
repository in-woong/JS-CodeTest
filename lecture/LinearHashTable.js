const HASH_SIZE = 5;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

LinearHashTable.prototype.hashCode = function (key) {
  //djb2 hash function
  let hash = 37; //seed
  //loselosehash방식
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(i + ' ->' + this.table[i].key + ':' + this.table[i].value);
    }
  }
};

LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} => index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return false;
};

LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return undefined;
};

LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index] === key) {
      const element = this.table[index].value;
      delete this.table[index];
      this.length--;
      
      return element;
    }
    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);
  return undefined;
};

let lht = new LinearHashTable();
lht.put('Ana', 172);
lht.put('John', 179);
lht.put('Donnie', 183);
lht.put('Mindy', 190);
lht.put('Paul', 168);
console.log('');
console.log(lht.get('Ana'));
console.log(lht.get('Paul'));
console.log(lht.get('Kim'));
