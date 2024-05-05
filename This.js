"use strict";

// 1.  this in global space

console.log(this); // global Object - window / global

// 2. this inside a function
// test for both strict and non - strict.
function x() {
  // the value depends on strict / non-strict mode
  console.log(this);
}
x();

//3. this inside non - strict mode

// Important :
// this substitution : if the value of this keyword is undefined or null,
//  this keyword will be replaced with global object only in Non -Strict Mode

//4. this keyword value depends upon how the function is called (window)

// test for both strict and non - strict.

x(); // undefined in strict mode

window.x(); // window in strict mode

// 5. This inside an object's method.

// Important :
// Diff between a function and a method is : if a function is a part of an object it is called method.

const obj = {
  a: 10,
  b: function () {
    console.log(this);
  },
};
obj.b();

// 6. This inside call apply bind methods
const student1 = {
  name: "Shubham",
  printName: function () {
    console.log(this.name);
  },
};
const student2 = {
  name: "Niki",
};

student1.printName();
student1.printName.call(student2); // the value of this becomes student 2;
student1.printName.apply(student2);
const functionCall = student1.printName.bind(student2);
functionCall();

// 7. this keyword inside arrow functions ()=>{}
// Arrow function doesnot provide their own this binding.
// it retains the this value of the enclosing lexial context.

const objj = {
  a: 34,
  x: () => {
    console.log(this); // refer to global object. enclosing lexical context
  },
};
objj.x();

// 8. this inside nested arrow function

const objj2 = {
  a: 42,
  x: function () {
    //enclosing lexical context : its like writing console.log(this) over here.
    const y = () => {
      console.log(this);
    };
    y();
  },
};
objj2.x();

// 9. this inside dom elements => reference to the HTML element.
//  check html button in .html file

// 10. More complex examples

const obbj3 = {
  a: 57,
  b: () => {
    console.log("this of b ", this);
    const c = () => {
      console.log("this of c ", this);
      const d = () => {
        console.log("this of d ", this);
      };
      d();
    };
    c();
  },
};

obbj3.b();

const objN = {
  a: 123,
  b: function () {
    console.log(this);
    const x = () => {
      console.log("x inside ", this);
      const y = () => {
        console.log("y inside x ", this);
      };
      y();
    };
    x();
  },
};
objN.b();
