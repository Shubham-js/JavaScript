// Shubham Jain - (SE - II)







// (function() {
// 	console.log(a)
// 	if(true) {
// 		var a = 'a';
// 	}
// 	console.log(a)

// 	console.log(b);
// 	const bar = () => {
// 		var b = 'b';
// 		console.log(b);
// 	}
// 	bar();
// })()


// ================


// function retry(fn, retries,isReduced=false) {
//   // write solution here
// Return new Promise((resolve,reject)=>{
// if(retries == 0 && isReduced)
// 	{
// 	reject(“End of retires”);	
// 	}
// 	Else
// 	{
// 		fn().then((res)=>{
// resolve(res);
// }).catch((err)=>{
// if(retries>0)
// retry(fn,retires-1,true);
// Else
// reject(err);
// })
// }
// })
	
// }

// const unreliableAPI = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) resolve('Success');
//     else reject('Failure');
//   });
// };

// const retryableAPI = retry(unreliableAPI, 3);
// retryableAPI().then(console.log).catch(console.error);



// ========



























// const users = [
//  {
//   name: 'Ramesh',
//   state: 'Delhi',
//  },
//  {
//   name: 'Rishabh',
//   state: 'Kolkata',
//  },
//  {
//   name: 'Rohit',
//   state: 'Delhi',
//  },
//  {
//   name: 'Deepak',
//   state: 'Kolkata',
//  },
// ]

// users.groupBy(user => user.state)

// // output:
// {
//   "Delhi": [
//     {
//       name: 'Ramesh',
//       state: 'Delhi',
//     },
//     {
//       name: 'Rohit',
//       state: 'Delhi',
//     },
//   ],
//   "Kolkata": [
//     {
//       name: 'Rishabh',
//       state: 'Kolkata',
//     },
//     {
//       name: 'Deepak',
//       state: 'Kolkata',
//     },
//   ]
// }
// Array.prototype.groupBy = function (this,cb){
// 	Let result = {};
// 	for(let item of this)
// 	{
// 		Const key = cb(item);
// 		if(result[key])
// 		{
// 		result.push(item);
// 		}
// 		Else
// 		{
// 		Result[key] = [item];
// 		}
// 	}
// Return result;

// }



// ==========




// function memoize(fn, expireTime) {
//   Let oldTime = 0;
// Let res = {};
// Return function(...args){
// Let newTime = new Date().getTime();
// Const key = JSON.stringyfy(...args);

// if(!res[key])
// {
// 	Res[key] = cb(...args);
// 	oldTime = newTime;
// }
// Else if(newTime - oldTime > expireTime)
// {
// 	Res[key] = cb(...args);
// }
// Return res[key];
	
// }
// }

// // Example
// const sum = (a, b) => { return a + b; }
// const memoizedSum = memoize(sum, 5000);
// memoizedSum(3, 4) // 7

