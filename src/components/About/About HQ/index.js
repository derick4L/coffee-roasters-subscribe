import UK from "../../../assets/about/desktop/illustration-uk.svg";
import Canada from "../../../assets/about/desktop/illustration-canada.svg";
import Australia from "../../../assets/about/desktop/illustration-australia.svg";

import "./styles.css";

const AboutHQ = () => {
  return (
    <section className="about-hq-container">
      <h2 className="about-hq-title">Our headquarters</h2>
      <div className="about-hq-card-container">
        <div className="about-hq-card">
          <img src={UK} alt="UK icon" />
          <h3 className="about-hq-card-title">United Kingdom</h3>
          <ul className="about-hq-card-text">
            <li>68 Asfordby Rd</li>
            <li>Alcaston</li>
            <li>SY6 1YA</li>
            <li>+44 1241 918425</li>
          </ul>
        </div>
        <div className="about-hq-card">
          <img src={Canada} alt="Canada icon" />
          <h3 className="about-hq-card-title">Canada</h3>
          <ul className="about-hq-card-text">
            <li>1528 Eglinton Avenue</li>
            <li>Toronto</li>
            <li>Ontario M4P 1A6</li>
            <li>+1 416 485 2997</li>
          </ul>
        </div>
        <div className="about-hq-card">
          <img src={Australia} alt="Australia icon" />
          <h3 className="about-hq-card-title">Australia</h3>
          <ul className="about-hq-card-text">
            <li>36 Swanston Street</li>
            <li>Kewell</li>
            <li>Victoria</li>
            <li>+61 4 9928 3629</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default AboutHQ;
