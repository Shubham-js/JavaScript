// const cart = ["shubham", "jain", "computer", "laptop"];

// const finalOutput = createOrder(cart)
//   .then((orderId) => {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return ProceedToPayment(orderId);
//   })
//   .then((result) => {
//     console.log("result ", result);
//     return result;
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .then(() => {
//     console.log(
//       "No matter what I will run as catch will run only the code above it "
//     );
//   });
// console.log("shubham ", finalOutput);
// function createOrder(cart) {
//   const pr = new Promise((resolve, reject) => {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid bro");
//       reject(err);
//     } else {
//       const orderId = "12345";
//       setTimeout(() => resolve(orderId), 2000);
//     }
//   });
//   return pr;
// }
// function validateCart(cart) {
//   return true;
// }
// function ProceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve("Proceed Successful");
//   });
// }

// const p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve("P1 is successful");
//     reject("P1 fails")
//   },3000);
// })
// const p2 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve("P2 is successful")
//     reject("P2 fails")
//   },1000);
// })
// const p3 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     // resolve("P3 is successful")
//     reject("P3 fails")
//   },2000);
// })
// Promise.all([p1,p2,p3]).then((res)=>{
//   console.log(res);
// }).catch((err)=>console.log(err));
// It will wait for all promises to fulfill and return an array of fulfilled promises , if there is any failure it will throw an error which is not an array

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//   console.log(res);
// }).catch((err)=>console.log(err));
// It will wait for all promises to settle

// Promise.race([p1,p2,p3]).then((res)=>{
//   console.log(res);
// }).catch((err)=>console.log(err));
// first setttled promise will be returned irrespetive its fullfiled/resolved/success or rejected/failure/reject

//  Promise.any([p1,p2,p3]).then((res)=>{
//   console.log(res);
// }).catch((err)=>console.log(err));
// It will wait for first settle success of a promise. Incase of all failure it will return an aggregated error and there will be an error array inside it

//async is a keyword that makes a function async
// an async function always returns a promise
// async function dummy(){
//   return "shubham";
// }

// const x = dummy();
// console.log(x);
// promise is got here as the function check if its a promise or not, if it's not a promise still it will wrap a promise around the return object.
// x.then(res=>console.log(res));
// we will need to resolve it
// const p = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   resolve("shubham with resolve");
//   },5000)
// });

// async function dummy2(){
//   return p;
// }

// const x2 = dummy2();
// console.log(x2);

// x2.then(res=>console.log(res));

// resolving using await
// async function resolvePromiseUsingAwait (){
//   const val = await p;
//   console.log(val);
// }
// await can only be used inside an async function
// resolvePromiseUsingAwait();

// async await vs Promise .then .catch
// function  getData(){

//   // Js Engine would not wait for the promise to resolve
//   p.then((res)=>console.log("res is ",res));
//   console.log("Namaste Shubham")
// }
// getData();

// Incase of async await
// async function getDataAsyncAwait(){
//   console.log("will work without wait")
// // JS enginer waits for the promise to get resolved
//   const x = await p;
//   console.log("Namaste Shubham 2");
//   console.log(x);
// }

// getDataAsyncAwait();

// const p = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   resolve("shubham p with resolve");
//   },10000)
// });
// const q = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   resolve("shubham q with resolve");
//   },5000)
// })
// Incase of async await
// async function getDataAsyncAwait(){
//   console.log("will work without wait")
// // JS enginer waits for the promise to get resolved
//   const x = await p;
//   console.log("Namaste Shubham 3");
//   console.log(x);
//    const y = await p;
//   console.log("Namaste Shubham 3");
//   console.log(y);
//   console.log("Both x and y are printed together in order");
// }

// getDataAsyncAwait();
// async function getDataWithAsyncAwaitDiffPromise(){
//   console.log("Namaste Bhai");
//   const x = await p;
//   console.log(x);
//   console.log("will wait or not ?");
//   const y = await q;
//   console.log(y);
//   console.log("final");
// }
// getDataWithAsyncAwaitDiffPromise();

// Here it will first print the x and then after t seconds will print y as t for x is less than y
// async function reverseOrder(){
//   console.log("Namaste Bhai");
//   const x = await q;
//   console.log(x);
//   console.log("will wait or not ?");
//   const y = await p;
//   console.log(y);
//   console.log("final");
// }
// reverseOrder();

// In truth the main thread of JS in never blocked fromexeution it only apprears, what actually happens behind the scene is : the execution is suspend and the function moves out of call stack and not block the main thread or will not freeze the page.
// Whenever it encounters an await the function execution suspends for that time. And handle promise. is popped out of the stack, when the time is over the function reappreas in the callstack and execution continues from the line it stopped.

// fetch() is a promise, which when resolved gives you a Response Object. This response object has a body which is a readable stream. To convert this readable stream to json, we do res.json(), this res.json() is again a promise which when resolved gives you the Json Value.
// await can only be used inside async function to handle promises that are returned by another async function or fetch method of web apis.
// async await is a syntactical sugar or promise native methods, like then and catch

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise Resolved");
  }, 10000);
});

const q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Second Promise Resolved");
  }, 20000);
});
// All promises are started resolving simultaneously so the diff of time is considered for second promise to be resolved.
function promiseCheck() {
  console.log("start all");
  const x = p.then((res) => console.log(res, new Date().getTime()));
  console.log("After promise p", x);
  const y = q.then((res) => console.log(res, new Date().getTime()));
  console.log("After promise q", y);
}
// promiseCheck();

async function asyncAwait() {
  console.log("start of asyncAwait");
  const x = await p;
  console.log("promise p ke baad ", x, new Date().getTime());
  const y = await q;
  console.log("promise q ke baad ", y, new Date().getTime());
}
// asyncAwait();
