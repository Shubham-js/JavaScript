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

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state
//  (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
//  In JavaScript, closures are created every time a function is created, at function creation time.
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

// Very Important

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const functions = [
  async () => {
    await sleep(2000);
    return 1;
  },
  async () => {
    await sleep(3000);
    return 2;
  },
  async () => {
    await sleep(1000);
    return 3;
  },
  async () => {
    await sleep(4000);
    return 4;
  },
];

batchProcess(functions, 2)
  .then((results) => console.log(results)) // should print [1, 2, 3, 4]
  .catch((error) => console.error(error));

async function batchProcess(fn, lt) {
  let init = 0;
  let l = fn.length;
  let result = [];
  try {
    while (init < l) {
      let funcList = fn.slice(init, init + lt);
      const response = await Promise.all(funcList.map(async (func) => func()));
      if (response?.error) {
        throw "Error with function at batch";
      }
      init += lt;
      result = [...result, ...response];
    }
  } catch (error) {
    console.log(error);
  }
  return result;
}

// Innovacer

// const people = [
//   {
//     name: "shubham",
//     age: 10,
//   },
//   {
//     name: "sumeet",
//     age: 10,
//   },
//   {
//     name: "kishan",
//     age: 20,
//   },
// ];

// o/p :  {10: ["shubham", "summet"],
// 20:["kishan"]
// }

// const obj = {};
// people.map((person, index) => {
//   let age = person.age;
//   if (!obj[age]) {
//     obj[age] = [person.name];
//   } else {
//     obj[age].push(person.name);
//   }
// });
// console.log(obj);

// import { useState } from "react";
// import "./styles.css";

// export default function App() {
//   const [todo, setTodo] = useState([]);
//   const [displayList, setDisplayList] = useState([]);
//   const [textVal, setTextVal] = useState("");
//   const [searchVal, setSearchVal] = useState("");

//   const matches = (str, target) => {
//     if (str.length > target.length) return false;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] !== target[i]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const checkAndPushTodo = () => {
//     if (textVal?.length == 0) return;
//     setTodo([...todo, textVal]);
//     setDisplayList([...displayList, textVal]);
//     setTextVal("");
//   };
//   const displayTodos = (val) => {
//     if (val?.length == 0) {
//       setDisplayList(todo);
//       return;
//     }

//     const newTodos = [];
//     todo.filter((item, index) => {
//       if (matches(val, item)) {
//         newTodos.push(item);
//       }
//     });
//     setDisplayList([...newTodos]);

//     return;
//   };

//   const deleteTodo = (idx) => {
//     const finalList = displayList.filter((item, index) => {
//       return index != idx;
//     });
//     setDisplayList(finalList);
//   };

//   return (
//     <div className="App">
//       <div className="Todo">
//         <div>
//           <input
//             type="text"
//             placeholder="write a todo"
//             value={textVal}
//             onChange={(e) => {
//               setTextVal(e.target.value);
//             }}
//           />
//           <button
//             onClick={() => {
//               checkAndPushTodo();
//             }}
//             disabled={textVal?.length > 0 ? false : true}
//           >
//             Submit
//           </button>
//         </div>
//         <div>
//           <ul>
//             {displayList?.map((item, index) => {
//               return (
//                 <div style={{ display: "flex" }}>
//                   <li>{item}</li>
//                   <button
//                     onClick={() => {
//                       deleteTodo(index);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//       <div className="Searchbar">
//         <input
//           type="text"
//           placeholder="Search for a todo"
//           value={searchVal}
//           onChange={(e) => {
//             setSearchVal(e.target.value);
//             displayTodos(e.target.value);
//           }}
//         />
//       </div>
//     </div>
//   );
// }

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); //number
console.log(typeof Symbol); //symbol
console.log(typeof true); //boolean
console.log(typeof 1000000000); //number
console.log(typeof "hsuabid"); //string
console.log(typeof 32); //number

// Null	"object"	N/A
// Undefined	"undefined"	N/A
// Boolean	"boolean"	Boolean
// Number	"number"	Number
// BigInt	"bigint"	BigInt
// String	"string"	String
// Symbol	"symbol"	Symbol

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); //number
console.log(typeof Symbol); //function
console.log(typeof Boolean); //function
console.log(typeof BigInt); //function
console.log(typeof String); //function
console.log(typeof Number); //function
console.log(typeof 8); //Number
console.log(typeof "afdafsf"); //String
console.log(typeof true); //Boolean

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
Promise.resolve(true).then(() => {
  console.log("4");
});
console.log("5");

// 1 3 5 4 2

// Steps :
// console.log("1"): This is a synchronous operation, so it gets executed immediately, and "1" is logged to the console.

// setTimeout(..., 0): This schedules a function to be executed after a minimum delay of 0 milliseconds. However, it does not execute immediately but rather places the callback in the event queue to be executed after the current call stack is cleared.

// console.log("3"): Another synchronous operation, so "3" is logged to the console immediately after "1".

// Promise.resolve(true).then(...): The promise resolves immediately, and the then method schedules the provided callback to be executed as a microtask, which gets processed before the next macrotask (like the setTimeout callback).

// console.log("5"): This synchronous operation is executed immediately, logging "5" to the console.

// Microtask execution (then callback): The callback from the Promise.then is now executed, logging "4" to the console.

// Macrotask execution (setTimeout callback): Finally, the callback scheduled by setTimeout is executed, logging "2" to the console.

// Flatten an array : Array.prototype.myFlat = function Flatten(){
//     let res = [];
//     for(let i =0;i<this.length;i++)
//     {
//         if(Array.isArray(this[i]))
//         {

//             // let flatArr = Flatten.call(this[i],false);
//             let flatArr = this[i].myFlat(this[i]);
//            res = [...res,...flatArr];
//         }
//         else if(this[i]!==undefined)
//         {
//             res.push(this[i]);
//         }

//     }
//     return res;
// }
// const arr = [1,2,3,,[4,5],[5,[6,7,8,[9,10],11],12],13,14];
// const x = arr.myFlat();
// // const y = arr.flat();
// console.log(x);
// // console.log(y);

// Geeky Ants

// const a = [{ A: 0 }, { B: 0 }, { C: 0 }];
// const n = a.length;
// let curr = 0;
// function counter() {
//   let index = curr % n;
//   let obj = a[index];
//   curr++;
//   const key = Object.keys(obj);
//   const value = Object.values(obj);
//   a[index][`${key}`] = Number(value[0] + 1);
//   return a[index];
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

//  const arr = [
//    { x: 6 },
//    [{ x: 34 }, [{ x: 66 }, [{ x: 20 }]]],
//    [{ x: [50, 25] }, { x: 4 }],
//    { x: 22 },
//  ];

// Max ans = 75 max value of x if x is array the sum of array is the value of that x

//  const findMax = (arr) => {
//    let maxVal = 0;
//    arr.forEach((item) => {
//      if (Array.isArray(item)) {
//        let recursiveCallVal = findMax(item);
//        maxVal = Math.max(maxVal, recursiveCallVal);
//      } else {
//        if (Array.isArray(item["x"])) {
//          const res = item.x.reduce((acc, curr) => (acc = acc + curr), 0);
//          maxVal = Math.max(maxVal, res);
//        } else {
//          maxVal = Math.max(maxVal, item?.x);
//        }
//      }
//    });
//    return maxVal;
//  };
//  console.log(findMax(arr));

// Find last word in a string

// const str = "        Hello     I    Am a long  Stringggg...     ";
// const res = getTrim(str);
// console.log(res);
// function getTrim(str="")
// {
//     if(str=="")return "";
//     str+=" ";
//     let word = "", last = "";
//     for(let i =0;i<str.length;i++)
//     {
//         if(str[i]!=' ')
//         {
//             word+=str[i];
//         }
//         else if(word.length>0)
//         {
//             last = word;
//             word="";
//         }
//     }
//     return last;
// }

// Search Bar : https://codesandbox.io/p/sandbox/cr2s69

// Predict the output :

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// new Promise((resolve) => {
//   console.log("5");
//   resolve();
// }).then(() => console.log("6"));

// setTimeout(() => console.log("7"), 0);

// console.log("8");

//  1 4 8 5 3 6 2 7
