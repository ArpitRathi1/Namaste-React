import { useState, useContext } from "react";
import logo from "../../assets/images/logo.jpg";
import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext";



export const Title = () => (
  <img className="w-[120px] pl-2" alt="logo" src={logo}></img>
);

function Header() {
  let [isLoggedin, setIsLoggedIn] = useState(false);

  // useContext takes one argu, which is name of context we are using.
  const {user} = useContext(UserContext)

  return (
    <div className="flex justify-between m-3  items-center bg-pink-50 shadow-lg">
      <Title />
      <div>
        <ul className="flex gap-3">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <li><Link to="/instamart">InstaMart</Link></li>
        </ul>
      </div>
      {isLoggedin ? (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>{user.name} Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>Login</button>
      )}
    </div>
  );
}

export default Header;
