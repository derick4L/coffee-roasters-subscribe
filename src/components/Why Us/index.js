import CoffeeBean from "../../assets/home/desktop/icon-coffee-bean.svg";
import Gift from "../../assets/home/desktop/icon-gift.svg";
import Truck from "../../assets/home/desktop/icon-truck.svg";
import "./styles.css";

function WhyUs() {
  return (
    <div className="why-us">
      <div id="why-us-styled-background">
        <div className="why-us-content">
          <h4>Why choose us?</h4>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="why-us-card">
          <div className="why-us-card-content">
            <img src={CoffeeBean} alt="coffee-bean" id="coffee-bean" />
            <h4>Best quality</h4>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
        </div>
        <div className="why-us-card">
          <div className="why-us-card-content">
            <img src={Gift} alt="gift" id="gift" />
            <h4>Exclusive Benefits</h4>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
        </div>
        <div className="why-us-card">
          <div className="why-us-card-content">
            <img src={Truck} alt="truck" id="truck" />
            <h4>Free Shipping</h4>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
