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
