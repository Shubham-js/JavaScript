//Polyfill of Bind

const Person1 = {
  firstName: "Shubham",
  secondName: "Jain",
};

const PrintData = function (clg, city, state) {
  console.log(
    this.firstName +
      " " +
      this.secondName +
      " from " +
      clg +
      " , " +
      city +
      " , " +
      state
  );
};

const result = PrintData.bind(Person1, "RCET");
result("Bhilai", "CG");

// Now we create a polyfill

Function.prototype.myBind = function (...args) {
  const obj = this;
  const param = args[0];
  const rem = args.slice(1);
  return function (...args2) {
    obj.apply(param, [...rem, ...args2]);
  };
};

const result2 = PrintData.myBind(Person1, "RCET");
result2("Bhilai", "CG");
