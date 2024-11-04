import React from "react";
// It means ReactDOM is default export and createRoot is named export
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css"
// Default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

      /**
       * Header
       *  - Logo
       *  - Nav Items
       *  - Cart
       * Body
       *  - Search Bar
       *  - Restraunt list
       *      - RestrauntCard
       *          - Image
       *          - Name
       *          - Rating
       *          - Cusines
       * Footer
       *  - Links
       *  - CopyRights
       */

function AppLayout() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
