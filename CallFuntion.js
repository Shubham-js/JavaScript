const Person1 = {
  firstName: "Shubham",
  secondName: "Jain",
};
const Person2 = {
  firstName: "Balzer",
  secondName: "Razor",
};
firstName = "shubha ";
secondName = "Kaha";
const printAnything = function (city, state) {
  console.log(this.firstName, this.secondName, city, state);
};

// We dont use Arrow function as they don't have context to this

// The issue you're facing is because arrow functions (=>) do not have their own this context. When you use .call()
//  to call printAnything, the this inside printAnything still refers to the outer context where it was defined,
//  which is not what you want.

//call method - invoke a funtion directly by passing in a refernece which points to the this variable in the funtion;
//function borrowing
printAnything.call(Person1, "gurgaon", "haryana");
printAnything.call(Person2, "bangalore", "karnatka");
printAnything("bangalore", "karnatka");
//apply method
printAnything.apply(Person1, ["gurgaon", "haryana"]);
printAnything.apply(Person2, ["bangalore", "karnatka"]);

//bind method
//used to bind and keep a copy of the method which can be used later

const x = printAnything.bind(Person1, "gurgaon", "haryana");
const y = printAnything.bind(Person2, "bangalore", "karnatka");

console.log(x, y);
x();
y();
