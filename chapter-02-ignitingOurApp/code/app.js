import React from "react"
import ReactDOM from "react-dom/client";


// Creating this kind of structure in react
// <div>
//     <h1>Heading 1</h1>
//     <h2>Heading 2</h2>
// </div>

const react_heading1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Heading1"
);
const react_heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Heading2"
);

// To pass multiple element we can us an array as children.
const container = React.createElement("div", {}, [
  react_heading1,
  react_heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
