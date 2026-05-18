function createReactElement(mainContainer, customReactElement) {
  const domElement = document.createElement(customReactElement.type);
  domElement.innerHTML = customReactElement.props.children;
  for (const key in customReactElement.props) {
    if (key !== "children") {
      domElement.setAttribute(key, customReactElement.props[key]);
    }
  }
  mainContainer.appendChild(domElement);
}

const customReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",

    children: "Click me to go to Google",
  },
  // even we can have children outside of props
};

const mainContainer = document.getElementById("root");

createReactElement(mainContainer, customReactElement);

// React.createElement("a", { href: "https://www.google.com", target: "_blank" }, "Click me to go to Google");
// Would be same as customReactElement

// createReactElement.createRoot -> this is the function that is used to create the root of the react application.
// Infact this creates the virtual dom of the react application.


// Reconciliation -> This is the process of comparing the virtual dom with the real dom and updating the real dom accordingly.
// React uses a technique called "diffing" to compare the virtual dom with the real dom and update the real dom accordingly.
// Diffing is the process of comparing the virtual dom with the real dom and updating the real dom accordingly.
// Reconciliation is the algorithm  behind what is popularly undestood as virtual dom.
// React Fiber -> This is the new reconciliation algorithm in React.


// According to React fiber is the performance of the list we need to use 
// key property to identify the items in the list.