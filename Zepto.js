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

// Machine Coding Round :

// import {
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   FlatList,
//   View,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import { useEffect, useState } from "react";
// import { data } from "./Data";

// export default function App() {
//   const [cat, setCat] = useState([]);
//   const [res, setRes] = useState([]);
//   const [selected, setSelected] = useState(0);
//   useEffect(() => {
//     // console.log('running')
//     // return new Promise ((resolve, reject)=>{})
//     fetch("https://google.com/")
//       .then(() => {
//         setCat(data);
//         callToGetCategoryItems(data[0]);
//       })
//       .catch((err) => {
//         setCat(data);
//         callToGetCategoryItems(data[0]);
//       });
//   }, []);
//   const callToGetCategoryItems = async (item) => {
//     try {
//       const resp = await fetch(
//         `https://api.sampleapis.com/wines/${item.category}`
//       );
//       const json = await resp.json();
//       setRes(json);
//     } catch (err) {
//       setData(err.message);
//     }
//   };
//   const renderData = function ({ item }) {
//     return (
//       <View style={styles.category}>
//         <TouchableOpacity
//           onPress={() => {
//             callToGetCategoryItems(item);
//             setSelected(item.id);
//           }}
//         >
//           <Text style={selected == item.id ? styles.selected : ""}>
//             {item.category}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderRes = function ({ item }) {
//     return (
//       <View style={styles.product}>
//         <Text>
//           {item.winery}
//           <Image style={styles.productImage} source={{ uri: item.image }} />
//         </Text>
//         <Text>{item.wine}</Text>
//       </View>
//     );
//   };
//   console.log(res, data, cat.length);
//   return (
//     <SafeAreaView style={styles.mainStyle}>
//       <View>
//         {
//           <FlatList
//             data={cat}
//             renderItem={renderData}
//             horizontal
//             keyExtractor={(item) => item.id}
//             showsHorizontalScrollIndicator={false}
//           />
//         }
//       </View>
//       {
//         <View>
//           <FlatList
//             data={res}
//             renderItem={renderRes}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//           />
//         </View>
//       }
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   mainStyle: {
//     // backgroundColor:'yellow'
//   },
//   category: {
//     padding: 6,
//     fontSize: 24,
//     fontWeight: 18,
//   },
//   product: {
//     padding: 20,
//     fontSize: 25,
//     width: 150,
//     height: 150,
//     border: "1px solid black",
//     borderRadius: 10,
//     flex: 1,
//     alignItems: "center",
//   },
//   productImage: {
//     height: 40,
//     width: 40,
//   },
//   selected: {
//     color: "red",
//   },
// });

// export const data = [
//   {
//     id: 0,
//     category: "reds",
//     icon: "icon",
//   },
//   {
//     id: 1,
//     category: "whites",
//     icon: "icon",
//   },
//   {
//     id: 2,
//     category: "sparkling",
//     icon: "icon",
//   },
//   {
//     id: 3,
//     category: "rose",
//     icon: "icon",
//   },
//   {
//     id: 4,
//     category: "dessert",
//     icon: "icon",
//   },
//   {
//     id: 5,
//     category: "port",
//     icon: "icon",
//   },
// ];
