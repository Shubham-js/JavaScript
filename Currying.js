//Currying can be done using either bind method or concept of closures

//Function Currying Using Bind Method
let multiply = (x, y) => {
  console.log(x * y);
};

let mutiplyByTwo = multiply.bind(this, 2);
mutiplyByTwo(5); // if mention one more value in the above case (this,2,6) then output will be 2*6=12 and this line is ignored.

// Function Currying Using Closures

const multiplyClosure = (x) => {
  return function (y) {
    console.log(x * y);
  };
};

const multiplyClosureByTwo = multiplyClosure(2);
multiplyClosureByTwo(7);
