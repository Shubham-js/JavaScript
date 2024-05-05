let c = 0;
const getData = () => {
  console.log("finally go data ", c++);
};

// Method without apply
const doSomeDebounce = (fn, t) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData();
    }, t);
  };
};

// Method with apply

// const doSomeDebounceWithApply = (fn, t) => {
//   let timer;
//   let context = this;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, getData);
//     }, t);
//   };
// };

let debouncedCall = doSomeDebounce(getData, 300);
// let debouncedCall = doSomeDebounceWithApply(getData, 200);



// Scroll ith dobounce would help in api calls 
