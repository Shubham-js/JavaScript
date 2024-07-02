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
