// Unacademy interview questions

// Round 1

//1.

// map vs forEach

//  Map return an array after iterating through each and every element and performing some action if needed.
// For Each doesn't return anything.

// Map doesnot modifies the original array;
// Foreach modifies the original array

// Map function can be chained to other functions like map().filter() as it returns another array
// Foreach cannot be chained as it doesnot returns anything.

const arr = [1, 2, 3, 4, 5];

const mapResult = arr.map((item, index) => {
  return (arr[index] = item + 2); // doesn't change the original array
});

const forEachResult = arr.forEach((item, index) => {
  return (arr[index] = item + 3); // changes original array but doesn't return. Changes are visible in original array
});

console.log(mapResult, forEachResult, arr);

// 2.

// undefined vs null
// VVI Line
// One reason to use typeof is that it does not throw an error if the variable has not been declared.
console.log(typeof undeclared_variable);
//  NULL :
// The null value represents the intentional absence of any object value.
//  It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
console.log(typeof null);

// null is a primitive value that represents the intentional absence of any object value.

typeof null; // "object" (not "null" for legacy reasons)
typeof undefined; // "undefined"
null === undefined; // false
null == undefined; // true
null === null; // true
null == null; // true
!null; // true
Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true

// Undefined

// The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.

// undefined is a primitive value used when a variable has not been assigned a value.

console.log(typeof undefined);

// 3.

// Event delegation and example
// Kindly read from event-delegation.js

// 4.
// Flatten the Array

let array = [1, 2, , [3, 4], [5, 6, , [7, 8, 9]]];
let flatten = [].concat(...array);
console.log(flatten);

// Custom Array.falt method

console.log(array.flat(2));

Array.prototype.myFlat = function (depth = 1) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (Array.isArray(this[i]) && depth > 0) {
      result.push(...this[i].myFlat(depth - 1));
    } else if (this[i] !== undefined) {
      result.push(this[i]);
    }
  }
  return result;
};
console.log(array.myFlat(1));

// Round 2

// 1.

// var vs let vs const

//  var is functional scope where as let and const are block scope
// This means var variables are accessible anywhere within the function they are declared in.

{
  var a = 10;
  let b = 5;
  const c = 1;
}
console.log(a);
// console.log(b); error : b is not defined
// console.log(c);  error : c is not defined

// decalration

var x = 1;
var x = 2; // does not throw an error; the second declaration simply overrides the first one.

// let y = 2;
// let y = 6; // error y has already been declared;
// same with const

// but when y=6 is used no error but wth const it gives assignment to a constant variable;

// let can't be redecalred but can be reinitialized, but const cannot be both.

// let and var can be decalred and not intitialzed but const need to be initialzed.

// 2.

function temp() {
  for (var i = 0; i < 3; i++) {
    // var i will give 3,3,3 let will give 0,1,2
    //  var - function scope -  there is a single i variable shared across all iterations of the loop and the entire temp function.
    // let - block scope -  This means a new i is created for each iteration of the loop.
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// temp();

//  Now we need to use var to print 0,1,2
// / Hint : use closure;

function temp2() {
  for (var i = 0; i < 3; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
// temp2();

function temp3() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      (function (i) {
        return function () {
          console.log(i);
        };
      })(i),
      i * 1000
    );
  }
}
// temp3();

// 3.

// Call Apply Bind Methods : CallFunction.js

// 4. Composition Polyfill  : infininte curring
// compose checks from right to left
// pipe checks from left to right

function addFive(a) {
  return a + 5;
}
function subTwo(a) {
  return a - 2;
}
function multiplyTwo(a) {
  return a * 2;
}
// right to left
const compose = (...functions) => {
  // for input to be array keep (functions = [])
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};
// left to right
const pipe = (...functions) => {
  return (args) => {
    return functions.reduce((arg, fn) => fn(arg), args);
  };
};
const evalue = compose(addFive, subTwo, multiplyTwo);
const pipeEval = pipe(addFive, subTwo, multiplyTwo);
console.log(evalue(5), pipeEval(5));

// 5.
// Implement promise.all : check Polyfill.js
