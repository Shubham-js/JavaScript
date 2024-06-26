// var arr = ['name','name'];
// var obj = {};
// obj.name = 'shubham';
// obj[arr] = "you”;
// console.log(obj.namename);

// const {state:{},action:{}} = customerHook(args);
// const useCustomHook = ()=>{
//     function logger(){
//         console.log("testing loggeer");
//     }
//     return {
//         logger
//     }
// }

// const {logger=()=>{}} = useCustomHook();

// logger();

// const x = 0 || true;
// console.log(x);

// function printBike(user,place)
// {
//     console.log(this.name, "has been bought by ",user,"at",place);
// }
// const testBike = {
//     names:"yamaha"
// }
// const x = printBike.bind(testBike,"shubham", "jamshedpur");
// x();

// Object.prototype.testProto = function(){
//     console.log("Just testing");
// }
// const abc = {};
// abc.testProto();

var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    // console.log(this._name);
    return this._name;
  },
};
// console.log(hero.getSecretIdentity());
// var stoleSecretIdentity = hero.getSecretIdentity();
// console.log(stoleSecretIdentity);

console.log(typeof null);

console.log(
  (function () {
    return this;
  })()
);

var arr = ["name"];
var obj = {};
obj.name = "shubham";
obj[arr] = "you";
console.log(obj.name);
// diff between
// ?? ||

var hero = {
  _name: "John Doe",
  getSecretIdentity: function () {
    return this._name;
  },
};

var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());

let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
// mPokket | R1 Discussion| React Js |Shubham Jain
