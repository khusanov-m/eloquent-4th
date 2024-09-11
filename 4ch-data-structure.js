// DATA STRUCTURE

// ******************************** 1. The sum of a range

// function range(start, end, step = 1) {
//   const arr = Array.from({
//     length: Math.floor(
//       (Math.max(start, end) - Math.min(start, end) + 1) / Math.abs(step)
//     ),
//   }).map((_, i) => start + step * i);
//   return arr;
// }

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(numbers) {
  let x = 0;
  for (let i of numbers) x += i;
  return x;
}

console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));

// ******************************** 2. Reversing an array

function reverseArray(arr) {
  const reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  return reverse;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

// ******************************** 3. A list

function arrayToList(arr) {
  // for (let i of arr) {
  //   const item = arr.shift();
  //   return { value: item, rest: arr.length ? arrayToList(arr) : null };
  // }

  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  // function extract(inner) {
  //   if (inner.rest) return [inner.value, ...extract(inner.rest)]
  //   else return [inner.value]
  // }
  // return [obj.value, ...extract(obj.rest)]

  const arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(value, rest) {
  return { value, rest };
}

function nth(obj, idx) {
  // let target = obj;
  // for (let i = 0; i < idx; i++) {
  //   if (target?.rest) target = target.rest;
  // }

  // return target.value;

  if (!obj) return undefined;
  else if (idx == 0) return obj.value;
  else return nth(obj.rest, idx - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.time();
console.log(nth(arrayToList([10, 20, 30, 40, 50])));
console.timeEnd();
// → 20

// ******************************** 4. Deep comparison

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true