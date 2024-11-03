import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

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

const Title = () => (
  <img 
  style={{width : "100px"}}
  alt="logo" 
  src="data:image/jpeg;base64,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"
  ></img>
);

function Header() {
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

const RestrauntList = [
  {
    name : "Burger King",
    image : "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/14dbbc72-8985-4bd8-b270-8df71f8cd6a5_65268.jpg",
    tag : ["Burger", "Amarican"],
    star : 4.3
  },
  {
    name : "KFC",
    image : "https://upload.wikimedia.org/wikipedia/en/thumb/5/57/KFC_logo-image.svg/640px-KFC_logo-image.svg.png",
    tag : ["Non-veg", "Chicken"],
    star : 4.7
  },
  {
    name : "Dominos",
    image : "https://w7.pngwing.com/pngs/264/277/png-transparent-domino-s-pizza-enterprises-logo-resturant-angle-rectangle-logo.png",
    tag : ["Non-veg", "Chicken"],
    star : 4.2  },  
  {
    name : "Haldiram",
    image : "https://upload.wikimedia.org/wikipedia/commons/2/25/Haldiram%27s_Logo_SVG.svg",
    tag : ["Veg", "Indian"],
    star : 4.0
  }
]

const RestrauntCard = ({name, image, tag, star}) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>{name}</h2>
      <h3>{tag.join(", ")}</h3>
      <h4>{star} stars</h4>
    </div>
  )
}

// no key <<<<<<<<<< index key (use only when you dont have anything) <<< unique key (best practice)
function Body () {
  return (
    <div className="Body">
      {
        RestrauntList.map((restraunt, index) => {
          return <RestrauntCard key={index} {...restraunt}></RestrauntCard>
        })
      }
    </div>
  )
}

function Footer () {
  return (
    <h4>Footer</h4>
  )
}

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
