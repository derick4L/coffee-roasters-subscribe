import { NavLink } from "react-router-dom";

import Logo from "../../assets/shared/desktop/logo.svg";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="coffeeroasters logo" id="coffeeroasters-logo" />
      <div className="nav">
        <label htmlFor="hamburger-input">
          <img src={Hamburger} alt="hamburger" id="hamburger" />
        </label>
        <input type="checkbox" id="hamburger-input" />
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us </NavLink>
          </li>
          <li>
            <NavLink to="/plan">Create Your Plan</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
