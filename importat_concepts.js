// VVI for reconciler diffing algorithm, react fiber, current Tree and Work in Progress Tree in React

// https://namansaxena-official.medium.com/react-virtual-dom-reconciliation-and-fiber-reconciler-cd33ceb0478e
const obj = {
  a: 5,
  b: "shubham",
  c: {
    d: 7,
    e: {
      f: "test",
      g: [1, 2, 3, 4, 5],
    },
    h: true,
  },
  i: "end",
  j: ["The", "end"],
};

// Method 1
// Using Map
function flatten(obj, prefix = "") {
  let res = {};
  Object.keys(obj).map((key, index) => {
    if (typeof obj[key] === "object") {
      const flatObj = flatten(obj[key], prefix ? prefix + "_" + key : key);
      res = { ...res, ...flatObj };
    } else {
      const finalKey = prefix?.length > 0 ? prefix + "_" + key : key;
      res[finalKey] = obj[key];
    }
  });
  return res;
}
const x = flatten(obj);
console.log(x);

//Method 2 using for
function flatter(obj, prefix = "") {
  let flatObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      subFlatObj = flatter(obj[key], prefix + key + "_");
      flatObj = { ...flatObj, ...subFlatObj };
    } else {
      flatObj[prefix + key] = obj[key];
    }
  }
  return flatObj;
}
console.log(flatter(obj));

// ES 6
// Let and Const
// Object Destructring and Array Destructuring
// Arrow functions
// ... Spread operator
// For/of
// Map Objects
// Set Objects
// Classes - JavaScript Classes are templates for JavaScript Objects.
// Promises - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Symbol - Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol
//  — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any
//   other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object.
//    That enables a form of weak encapsulation, or a weak form of information hiding.

// Default Parameters : ES6 allows function parameters to have default values.
// Function Rest Parameters : The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

// Rest are here : https://www.w3schools.com/js/js_es6.asp

// Important !!!!

// For/of and For/in and Array.forEach Loop

// The JavaScript for/of statement loops through the values of an iterable objects.

// The JavaScript for in statement loops through the properties of an Object.

// The forEach() method calls a function (a callback function) once for each array element.

// Array.slice()

// Syntax :

// array.slice(start, end);

// start :	Optional.
// Start position. Default is 0.
// Negative numbers select from the end of the array.

// end : 	Optional.
// End position. Default is last element.
// Negative numbers select from the end of the array.

// The slice() method returns selected elements in an array, as a new array.

// The slice() method selects from a given start, up to a (not inclusive) given end.

// The slice() method does not change the original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits.slice(-3, -1); // [ 'Lemon', 'Apple' ]

console.log(myBest);

// Array.Splice()

// Syntax
//array.splice(index, count, item1, ....., itemX)
// index :	Required.
// The index (position) to add or remove items.
// A negative value counts from the end of the array.
// count :	Optional.
// Number of items to be removed.
// item1, ..., :	Optional.
// The new elements(s) to be added.

// Return Value : An array containing the removed items (if any).
// Modifies the original array.
// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
const removed = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(removed, fruits);

// Array.toSpliced()

// Synatx :
// array.toSpliced(index, count, item1, ....., itemX)

// The toSpliced() method adds and/or removes array elements.

// The toSpliced() method returns a new array.

// The toSpliced() method does not change the original array.

// The toSpliced() method is the copying version of the splice() method.

// Return Value : A new array including the changes.

// At position 2, remove 2 items
// const fruitsM = ["Banana", "Orange", "Apple", "Mango"];

// const fruits2 = fruitsM.toSpliced(2, 2);
// console.log(fruits2);

// ECMAScript version has to be ES2023 to run toSpliced

// Array Const : The keyword const is a little misleading.

// It does NOT define a constant array. It defines a constant reference to an array.
// Because of this, we can still change the elements of a constant array.

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// Shadowing

// function func() {
//   var a = "Geeks";
//   let b = "Geeks";

//   if (true) {
//     let a = "GeeksforGeeks"; // Legal Shadowing
//     var b = "Geeks"; // Illegal Shadowing
//     console.log(a); // It will print 'GeeksforGeeks'
//     console.log(b); // It will print error
//   }
// }
// func();

// Higher Order Function :

// A higher-order function in JavaScript is a function that either:

// Takes one or more functions as arguments, or
// Returns a function as its result.
// This makes it possible to write more modular, reusable, and flexible code.

// 1. Passing function as arguments:

// function higherOrder(fn, num) {
//     return fn(num);
// }

// function square(x) {
//     return x * x;
// }

// console.log(higherOrder(square, 5));  // Output: 25

// 2. Returning a function :

// function multiplyBy(factor) {
//     return function(num) {
//         return num * factor;
//     };
// }

// const double = multiplyBy(2);
// console.log(double(5));  // Output: 10

// Block vs Global vs Local Scope :

// 1. Global Scope
// A variable declared outside of any function or block has global scope.
// It is accessible from anywhere in the code.

// let globalVar = "I am global!";

// function showGlobal() {
//     console.log(globalVar); // Can access the global variable
// }

// showGlobal();  // Output: I am global
// console.log(globalVar);  // Output: I am global

// In this case, globalVar is a global variable and can be accessed from both the function and outside of it.

// 2. Local (Function) Scope
// A variable declared inside a function is local to that function.
// It cannot be accessed from outside the function, providing encapsulation.

// function showLocal() {
//     let localVar = "I am local!";
//     console.log(localVar);  // Output: I am local
// }

// showLocal();
// console.log(localVar);  // Error: localVar is not defined

// function showLocal() {
//     let localVar = "I am local!";
//     console.log(localVar);  // Output: I am local
// }

// showLocal();
// console.log(localVar);  // Error: localVar is not defined

// Here, localVar is local to showLocal() and cannot be accessed outside the function.

// 3. Block Scope (introduced in ES6)
// Variables declared with let or const inside a block (i.e., { ... }) have block scope.
// Block scope is created using control flow statements like if, for, or while or any code enclosed in {}.

// if (true) {
//     let blockVar = "I am block-scoped!";
//     console.log(blockVar);  // Output: I am block-scoped
// }

// console.log(blockVar);  // Error: blockVar is not defined

// In this example, blockVar is only accessible within the if block and is not available outside.

// Key Differences:
// Global scope: Accessible everywhere.
// Local (function) scope: Only accessible inside a function.
// Block scope: Only accessible inside a block (with let or const, not with var).
// Important Notes:
// var variables are function-scoped (not block-scoped), meaning they ignore block scope and only respect function scope.

// if (true) {
//     var functionScoped = "I am function-scoped!";
// }
// console.log(functionScoped);  // Output: I am function-scoped

// Error Handling :

// Error handling in JavaScript is crucial for writing robust, reliable programs. The techniques for error handling differ depending on whether the code is synchronous or asynchronous.

// 1. Synchronous Error Handling
// In synchronous code, errors occur in sequence, and they can be caught using the standard try...catch block.

// Example of Synchronous Error Handling:
// javascript
// Copy code
// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Cannot divide by zero!");
//     }
//     return a / b;
// }

// try {
//     let result = divide(10, 0);
//     console.log(result);
// } catch (error) {
//     console.log("Error:", error.message);  // Output: Error: Cannot divide by zero!
// }
// In this example, if an error occurs (dividing by zero), it’s thrown, and the try...catch block captures and handles it.
// Synchronous errors stop the execution of the code if not handled.
// 2. Asynchronous Error Handling
// Handling errors in asynchronous code is different because the code doesn't execute sequentially. In JavaScript, asynchronous operations are often managed using callbacks, promises, or async/await, and each approach has its own error-handling mechanism.

// a. Callbacks
// With callbacks, errors are often passed as the first argument in a callback function (called "error-first" callbacks).

// Example of Error Handling with Callbacks:
// javascript
// Copy code
// function fetchData(callback) {
//     // Simulating async operation
//     setTimeout(() => {
//         const error = new Error("Failed to fetch data");
//         callback(error, null);  // Passing error to the callback
//     }, 1000);
// }

// fetchData((error, data) => {
//     if (error) {
//         console.log("Error:", error.message);  // Output: Error: Failed to fetch data
//     } else {
//         console.log("Data:", data);
//     }
// });
// The callback function receives the error, allowing you to handle it appropriately.
// b. Promises
// Promises provide a cleaner way to handle asynchronous errors with .catch() method to catch any rejected promise.

// Example of Error Handling with Promises:
// javascript
// Copy code
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Failed to fetch data"));
//         }, 1000);
//     });
// }

// fetchData()
//     .then(data => console.log("Data:", data))
//     .catch(error => console.log("Error:", error.message));  // Output: Error: Failed to fetch data
// Promises allow you to chain .then() for success and .catch() for errors, making error handling more structured.
// c. Async/Await
// async/await syntax allows writing asynchronous code in a synchronous manner. It uses try...catch for error handling, just like synchronous code, but works for asynchronous operations.

// Example of Error Handling with Async/Await:
// javascript
// Copy code
// async function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("Failed to fetch data"));
//         }, 1000);
//     });
// }

// async function getData() {
//     try {
//         let data = await fetchData();
//         console.log("Data:", data);
//     } catch (error) {
//         console.log("Error:", error.message);  // Output: Error: Failed to fetch data
//     }
// }

// getData();
// try...catch is used to handle errors when using async/await. It makes the code more readable and easier to follow.
// Key Points to Consider:
// Synchronous code: You handle errors with try...catch.
// Asynchronous code:
// Callbacks: Errors are passed as the first argument to callbacks.
// Promises: Errors are caught using .catch().
// Async/Await: Use try...catch blocks for error handling in asynchronous functions.
// Each of these techniques allows for better handling of both synchronous and asynchronous errors in JavaScript, depending on the context.

// Question :

//  Finally a coding question in which I was given a number, and I had to add multiple functions to the number.

// let x = 10;
// x.add(10).substract(10).divide(100).multiply(20).display();
// Number.prototype.add = function(val){
//   return this+val;
// }
// Number.prototype.subtract = function(val){
//   return this-val;
// }
// Number.prototype.multiply = function(val){
//   return this*val;
// }
// Number.prototype.divide = function(val){
//   return this/val;
// }
// Number.prototype.display = function(){
//   console.log(this);
// }

// right side assignment is first what is b=5 is declared globally and b is alisgned 5
// function data() {
//   let a = b = 5;
// }
// data();
// console.log(b);

// output is 5 of b

// function data() {
//   const a = b = 5;
// }
// data();
// console.log(b);

// output is 5 of b
