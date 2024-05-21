// import { useEffect, useState } from "react";
// import "./App.css";
// function App() {
//   const { data, error, loading, search, setSearch } = CustomReactQuery(
//     "https://fakestoreapi.com/products",
//   );
//   return (
//     <>
//       <h1>Handling API Like Pro</h1>
//       <input
//         type="text"
//         placeholder="Search"
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       {loading && <h1>Loading...</h1>}
//       {error && <h1>Something went wrong</h1>}
//       <h1>Count of products : {data.length}</h1>
//     </>
//   );
// }

// export default App;
// const CustomReactQuery = (urlPath) => {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   useEffect(() => {
//     // Suppose we need to use await we need to use IIFE
//     // (defination of function)()  This is IIFE
//     // ; is used before IIFE as sometimes Js doesn't understand
//     // the begining of IIFE
//     const controller = new AbortController();
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         // This controller is used to avoid race condition
//         // If due to multiple api calls we need the resilt of only the last one
//         // we don't need to render dom for all calls
//         const response = await axios(urlPath + ?search={search}, {
//           signal: controller.signal,
//         });
//         console.log(response);
//         setData(response);
//       } catch (error) {
//         // we need to handle the axios error seperately as extra calls will be thrown here
//         if (axios.isCancel(error)) {
//           console.log("error for api calls");
//         }
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     })();
//     // Cleanup function
//     return () => {
//       controller.abort();
//     };
//   }, [search]);
//   return {
//     data,
//     loading,
//     error,
//     setSearch,
//     search,
//   };
// };
