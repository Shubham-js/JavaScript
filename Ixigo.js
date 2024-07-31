// / for (let i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000 );
// }
// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// 	console.log("name");
// }

// global -> i = 5

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x); // error - >x
//     }
//     console.log(x);
//     console.log(y);
// })();
// 2
// const prom1 = new Promise((res) => res(2));
// prom1.then(res => {
//     console.log(res); //2
//     return res*2; //4
// }).then(res => { //4
//     console.log(res); //4
//     return res*2; //8
// }).finally(res => {
//     console.log(res); //8
//     return res*2; //16
// }).then(res => {
//     console.log(res);
//     return res
// })

console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("useEffect console Above ");
useEffect(() => {
  console.log("useEffect console Inside ");
});
console.log("useEffect console Below ");
console.log("script end");

// script start
// useEffect console Above
// useEffect console Below
// script end
// promise 1
// promise 2
// setTimeout
// useEffect console Inside

// intersection observer
//scroll snap
