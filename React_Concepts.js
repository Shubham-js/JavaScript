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

// Higher Order Components

// A Higher-Order Component (HOC) is a function that takes a component and returns
//  a new component with additional props or functionality. HOCs are used for reusing component logic

import React from "react";

// Define a Higher-Order Component
const withLogging = (WrappedComponent) => {
  return (props) => {
    React.useEffect(() => {
      console.log("Component Mounted");
      return () => {
        console.log("Component Unmounted");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

// Define a simple functional component
const HelloWorld = () => {
  return <p>Hello, World!</p>;
};

// Enhance the component using the HOC
const HelloWorldWithLogging = withLogging(HelloWorld);

// Usage
const App = () => {
  return <HelloWorldWithLogging />;
};

export default App;
