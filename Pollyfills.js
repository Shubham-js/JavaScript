// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers
//  that do not natively support it.

// Map Polyfill
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const x = [1, 2, 3, 4, 5];
const double = (item, i, arr) => {
  return item * 2;
};
const res = x.myMap(double);
console.log(res);

// Filter Pollyfill

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const res2 = x.myFilter((item, i, arr) => {
  return item % 2 == 0;
});

console.log(res2);

// Reduce Polyfill
// arr.reduce((acc,curr,idx,arr)=>{},initialValue)

Array.prototype.myReduce = function (cb, intitalValue) {
  var accumulator = intitalValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

const res3 = x.myReduce((acc, curr) => {
  acc = acc + curr;
  return acc;
});

console.log(res3);

// Call Apply Bind Pollyfill

// Call
// Original
const myfunction = function (city, price) {
  console.log(`${this.name} costs Rs ${price}/- in ${city}`);
};

const bike = { name: "suzuki" };
myfunction.call(bike, "mumbai", 5000);

// Polyfill
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is not allowed with this type");
  }
  // attaching function to new property of context
  context.fn = this;
  context.fn(...args);
};

myfunction.myCall(bike, "kolkata", 6000);

// Apply
//Original
myfunction.apply(bike, ["Delhi", 7000]);

// Polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("this is not allowed with this type");
  }
  if (!Array.isArray(args)) {
    throw new Error("this is only allowed to pass array");
  }
  // attaching function to new property of context
  context.fn = this;
  context.fn(...args);
};

myfunction.myApply(bike, ["bangalore", 8000]);

// Bind
//Original
const result = myfunction.bind(bike, "Hyderabad", 4500);
result();

//Pollyfill
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("this is not allowed with this type");
  }
  context.fn = this;
  return function (...newArgs) {
    context.fn(...args, ...newArgs);
  };
};

const result2 = myfunction.myBind(bike, "Chennai", 5500);
result2();

console.log("OK Checks");
// Once Polyfill

function once(fn, context) {
  let called = false;
  return function () {
    if (called) return;
    called = true;
    return fn.apply(context || this, arguments);
  };
}

const xo = once(function demo(owner) {
  console.log("Demo ", this.name, owner);
}, bike);

// Result will be printed only once for first one
xo("shubham");
xo("jain");
xo();
xo();
xo();

// Memoize Polyfill
function summation(num1, num2) {
  for (let i = 0; i < 100000000; i++) {
    num1 = num1 + num2;
  }
  return num1;
}
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!res[key]) {
      res[key] = fn.call(context || this, ...args);
    }
    return res[key];
  };
}

const y = myMemoize(summation);
console.time("First");
const results = y(2, 5);
console.log(results);
console.timeEnd("First");
console.time("Second");
const result1 = y(2, 5);
console.log(result1);
console.timeEnd("Second");

// Promise Polyfill

function myPromise(executor) {
  let onResolve,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }

  this.then = function (callback) {
    onResolve = callback;
    if (isFullfilled & !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isFullfilled & !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

const promiseExample = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved ");
  }, 3000);
});

promiseExample
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

myPromise.resolve = (val) => {
  return new myPromise(function executor(resolve, reject) {
    resolve(val);
  });
};
myPromise.reject = (val) => {
  return new myPromise(function executor(resolve, reject) {
    reject(val);
  });
};

// Promise.all Polyfill

const firstPromise = (check) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first resolved ", check);
    }, 2000);
  });
};
const secondPromise = (check) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second resolved ", check);
    }, 1000);
  });
};
const thirdPromise = (check) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("third resolved ", check);
    }, 1500);
  });
};

// Promise.all([
//   firstPromise("shubham"),
//   secondPromise("king"),
//   thirdPromise("lets do it"),
// ]).then((res) => {
//   console.log(res);
// });

Promise.allPolyfill = function (promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    if (promises?.length == 0) {
      resolve(results);
      return;
    } else {
      let pending = promises.length;
      promises.map((promise, index) => {
        Promise.resolve(promise).then((res) => {
          results[index] = res;
          pending--;
          if (pending == 0) {
            resolve(results);
          }
        }, reject);
      });
    }
  });
};

Promise.allPolyfill([
  firstPromise("shubham"),
  secondPromise("king"),
  thirdPromise("lets do it"),
])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.error(error));
// we can try to reject one promise it will work as well.

// Debounce Polyfill
// Throttle Polyfill

// ForEach polyfill

const arr = [1, 2, 3, 4, 5];
// Original

// arr.forEach((item) => {
//   item *= 2;
//   console.log(item);
// });

// Prototype

Array.prototype.myForEach = function (cb) {
  try {
    if (typeof cb !== "function") {
      throw "Not a function";
    }
    for (let i = 0; i < this.length; i++) {
      if (this.hasOwnProperty(i)) cb(this[i], i, this);
    }
  } catch (err) {
    console.error(err);
  }
};
const testFunction = (item, index, arr) => {
  console.log(item * index);
};
arr.myForEach(testFunction);

//  debounce Polyfill

// const data = "check";
// document.querySelector("#header").innerHTML = message;
// document.querySelector("#header").addEventListener(
//   "click",
//   () => {
//     console.log("clicked");
//     debouncedCall(data);
//   },
//   false
// );
// console.log(message);

const debounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const debouncedCall = debounce((data) => {
  console.log("inside click ", data);
}, 300);

// Throttle Polyfill

const throttle = (cb, d) => {
  let old = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - old < d) return;
    old = now;
    return cb(...args);
  };
};

const throttledCall = throttle((data) => {
  console.log("inside click ", data);
}, 3000);

// Promise.all Promise.allSettle

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 2500);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 500);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3500);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 4 resolved");
  }, 1500);
});

async function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(result);
    }
    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          result[index] = data;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// PromiseAll([p1,p2,p3,p4]).then(res=>console.log(res)).catch(err=>console.log(err));

async function PromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(result);
    }
    let result = [];
    let count = 0;
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((data) => {
          result[index] = {
            isFulfilled: true,
            value: data,
          };
        })
        .catch((err) => {
          result[index] = {
            isFulfilled: false,
            value: err,
          };
        })
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

// PromiseAllSettled([p1,p2,p3,p4]).then(res=>console.log(res)).catch(err=>console.log(err));

// First settled promise whether resolved or rejected.
async function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(result);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// PromiseRace([p1,p2,p3,p4]).then(res=>console.log(res)).catch(err=>console.log(err));

// First settled promise only when resolved, if all are rejected then gives the error.
async function PromiseAny(promises) {
  let errors = [];
  let errCnt = promises.length;
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve(result);
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errors[index] = err;
          errCnt--;
          if (errCnt == 0) {
            reject(AggregateError(errors));
          }
        });
    });
  });
}

// PromiseAny([p1,p2,p3,p4]).then(res=>console.log(res)).catch(err=>console.log(err));



// Array.flat () Pollyfill : 

Array.prototype.myFlat = function Flatten(firstCall = true){
    let res = [];
    for(let i =0;i<this.length;i++)
    {
        if(Array.isArray(this[i]) && firstCall===true)
        {
            
            // let flatArr = Flatten.call(this[i],false); // This can also be done
            let flatArr = this[i].myFlat(this[i],false);
           res = [...res,...flatArr];
        }
        else if(this[i]!==undefined)
        {
            res.push(this[i]);
        }
        
    }
    return res;
}
const arr2 = [1,2,3,,[4,5],[5,[6,7,8,[9,10],11],12],13,14];
const xx = arr2.myFlat();
const yy = arr2.flat();
console.log(xx);
console.log(yy);
