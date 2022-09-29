import { NavLink } from "react-router-dom";

import Logo from "../../assets/shared/desktop/logo.svg";
import Facebook from "../../assets/shared/desktop/icon-facebook.svg";
import Twitter from "../../assets/shared/desktop/icon-twitter.svg";
import Instagram from "../../assets/shared/desktop/icon-instagram.svg";

import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-links">
          <NavLink to="/" className="footer-link">
            HOME
          </NavLink>
          <NavLink to="/about-us" className="footer-link">
            ABOUT US
          </NavLink>
          <NavLink to="/plan" className="footer-link">
            CREATE YOUR PLAN
          </NavLink>
        </div>
        <div className="social-links">
          <img src={Facebook} alt="facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
