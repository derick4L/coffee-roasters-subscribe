import Logo from "../../assets/shared/desktop/logo.svg";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import "./styles.css";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="coffeeroasters logo" id="coffeeroasters-logo" />
      <div className="nav">
        <label for="hamburger-input">
          <img src={Hamburger} alt="hamburger" id="hamburger" />
        </label>
        <input type="checkbox" id="hamburger-input" />
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Create Your Plan</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
