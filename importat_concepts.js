// VVI for reconciler diffing algorithm, react fiber, current Tree and Work in Progress Tree in React

// https://namansaxena-official.medium.com/react-virtual-dom-reconciliation-and-fiber-reconciler-cd33ceb0478e
const obj = {
  a: 5,
  b: "shubham",
  c: {
    d: 7,
    e: {
      f: "test",
      g: [1, 2, 3, 4, 5],
    },
    h: true,
  },
  i: "end",
  j: ["The", "end"],
};

// Method 1
// Using Map
function flatten(obj, prefix = "") {
  let res = {};
  Object.keys(obj).map((key, index) => {
    if (typeof obj[key] === "object") {
      const flatObj = flatten(obj[key], prefix ? prefix + "_" + key : key);
      res = { ...res, ...flatObj };
    } else {
      const finalKey = prefix?.length > 0 ? prefix + "_" + key : key;
      res[finalKey] = obj[key];
    }
  });
  return res;
}
const x = flatten(obj);
console.log(x);

//Method 2 using for
function flatter(obj, prefix = "") {
  let flatObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      subFlatObj = flatter(obj[key], prefix + key + "_");
      flatObj = { ...flatObj, ...subFlatObj };
    } else {
      flatObj[prefix + key] = obj[key];
    }
  }
  return flatObj;
}
console.log(flatter(obj));
