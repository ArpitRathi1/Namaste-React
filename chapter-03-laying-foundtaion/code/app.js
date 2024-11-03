import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML(DOM)
const heading = React.createElement(
  "h1",
  {
    id: "title1",
    key: "h1",
  },
  "Heading"
);

// JSX => React.createElement => object => HTML(DOM)
// This is a react element
const heading2 = (
  <h1 id="heading" key="heading">
    JSX Heading
  </h1>
);

// React component -> A React component is a function or a class that can produce React elements and manage their state and lifecycle.
// Types :
// Functional -> New
// Class -> OLD

function HeaderComponent() {
  return (
    <div>
      {heading2}
      {1+2}
      <h1>hello form Functional component</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
