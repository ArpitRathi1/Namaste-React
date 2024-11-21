import { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import {Link} from "react-router-dom"
// Named export
export const Title = () => (
  <img style={{ width: "100px" }} alt="logo" src={logo}></img>
);

function Header() {
  let [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><Link to="/instamart">InstaMart</Link></li>
        </ul>
      </div>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Login</button>
      )}
    </div>
  );
}

export default Header;
