import Logo from "../../assets/shared/desktop/logo.svg";
import Hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import "./styles.css";

function Navbar() {
  const toggle = () => {};

  return (
    <>
      <nav className="nav">
        <img src={Logo} alt="coffeeroasters logo" id="coffeeroasters-logo" />
        <img src={Hamburger} alt="hamburger" id="hamburger" type="checkbox" />
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Create Your Plan</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
