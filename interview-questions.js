// Kindly read this before interview V.V.Important!

// sum(1)(2)(3)(4)(5)......() upto n
const sum = (a) => {
  return (b) => {
    return b ? sum(a + b) : a;
  };
};

let sum1 = (a) => (b) => {
  return b ? sum1(a + b) : a;
};

const result1 = sum(1)(2)(3)(4)(5)();
const result2 = sum(1)();
console.log(result1, result2);

//closure example :

function counter() {
  let count = 0;
  let message = `Current counter value is ${count}`;
  this.increment = function () {
    count++;
  };
  this.printCounter = function () {
    console.log(message);
  };
}

const temp = new counter();
temp.increment();
temp.increment();
temp.printCounter(); // output is 0 due to closure

// Function Decalration vs Function Expression

// Function declaration is defining a function using function keyword
// Function expression means assigning a function to a variable

// Deep Copy vs Shallow Copy

// Shallow Copy :  the reference is copied, not the actual object itself, it means
// that changes made to nested objects in either the original or shallow copy will be reflected in both.

// const shallowCopy = Object.assign({}, original);
// const shallowCopy2 = {...obj}

// Deep Copy
//  creates a new object and recursively copies all properties and nested objects.
//  This means that even nested objects are duplicated, not just their references.
//  Changes made to the original object or any nested objects will not affect the deep copy, and vice versa.

// const _ = require('lodash');

// const original = {
//   a: 1,
//   b: { c: 2 }
// };

// // Deep copy
// const deepCopy = _.cloneDeep(original);

// // Modify deep copy
// deepCopy.a = 5;
// deepCopy.b.c = 10;

// console.log(original);  // { a: 1, b: { c: 2 } }
// console.log(deepCopy); // { a: 5, b: { c: 10 } }

// Print Original Properties of array.

Array.prototype.check = "Dummy property";
const arr = [1, 2, 3, 4, 5];

for (let v in arr) {
  if (arr.hasOwnProperty(v)) console.log(v); // check is getting printed directly but adding this if will help.
}
