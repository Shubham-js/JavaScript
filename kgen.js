// const arr = [1,2,,4,6,'3',-5, {a:1}];

// function reverseArray(arr=[]){
// let temp = [];
// for(let i=arr.length-1;i>=0;i--)
// {
//   temp.push(arr[i]);
// }
// return temp;
// }

// const res = reverseArray(arr);
// console.log(res);

// [1,2,,4,6,'3',-5, {a:1}]
// [{a:1},-5,'3',6,4,undefined,2,1]

// const arr = [1,2,'3',3,'3',1,4,,3,'3',4,,0,8,'9'];

// function RemoveDuplicate(arr){
//   const s = new Set(arr);
//   let res = [];
// for(let val of s)
// {
//   res.push(val);
// }

//   return res;

// }

// console.log(RemoveDuplicate(arr));

// const a = {a:10};
// const b = {a:10};

// console.log(a===b);

// const myUseState = (arg=undefined)=>{
//     let value = arg;
//      const setValue= (args)=>{
//        console.log("value is ",args);
//        if(typeof (args) != 'function')
//        value = args;
//         console.log("value updated 123", value);
//      }

//   console.log("value updated ", value);
//   return [value, setValue]
// }

// const [value, setValue] = myUseState('shubham');

// console.log(value);
// setValue("dummy");
// console.log(value);
