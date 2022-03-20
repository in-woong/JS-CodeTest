//묶는다?? => 해시테이블을 이용해보자

//Array
const ArrTable = [];
ArrTable['key'] = 100;
ArrTable['key2'] = 'Hello';
console.log(ArrTable['key']);
ArrTable['key'] = 349;
console.log(ArrTable['key']);
delete ArrTable['key'];
console.log(ArrTable['key']);

//Object
const ObTable = {};
ObTable['key'] = 100;
ObTable['key2'] = 'Hello';
console.log(ObTable['key']);
delete ObTable['keyy'];
console.log(ObTable['key']);

//Map
const mapTable = new Map();

mapTable.set('key', [...mapTable.get("key"),200]);
mapTable.set('key2', 'Hello');
console.log(mapTable['key']);
console.log(mapTable.get('key'));
const object = { a: 1 };
mapTable.set(object, 'A1');
console.log(mapTable.get(object));
console.log(mapTable.keys());
console.log(mapTable.values());
mapTable.clear();
console.log(mapTable.values());

//Set
const setTable = new Set();
setTable.add('key');
setTable.add('key2');
console.log(setTable.has('key'));
console.log(setTable.has('key3'));
setTable.delete('key2');
console.log(setTable.has('key2'));
setTable.add('key3');
console.log(setTable.size);
setTable.clear();
console.log(setTable.size);
