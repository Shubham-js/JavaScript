// let a = []
// console.log(typeof a)

// let a = [1,2,4]
// //output [{1:1}, {2:2}, {4:4}]

// const res = a.map((item)=>{

//     let temp = item;

//     return {[temp]:item};
// });
// // console.log(res);

// let input = [{ 1: 1}, {2: 2}, {3: 3}, {4: 4}, {3:3}]
// //output [{ 1: 1}, {2: 2}, {4: 4}]
// const parser = (ar, value) => {
//     let arr = ar.filter((item)=>{
//         const {[a]:b} = item;
//         console.log(__proto__(item));
//           return a !=value;
//     })
//     return arr;
// }

// const res = parser(input, 3);
// console.log(res);

// class Area {

//     computeResult(x,y)
//     {
//         console.log(x,y);
//     }

//      getHeight()
//     {
//         return null;
//     }

// }

// console.log(Area.computeResult(10,15).getHeight())

function test() {
  setTimeout(() => {
    console.log("1");
  }, 0);
  console.log("0");
}

test();
