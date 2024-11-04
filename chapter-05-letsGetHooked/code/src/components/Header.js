import { logo } from "../constants";

// Named export
export const Title = () => (
    <img 
    style={{width : "100px"}}
    alt="logo" 
    src={logo}
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

export default Header