import { useState } from "react";
import { logo } from "../constants";

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
