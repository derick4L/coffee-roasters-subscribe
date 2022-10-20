import { useNavigate } from "react-router-dom";

import "./styles.css";

function HeroCard() {
  let navigate = useNavigate();

  return (
    <section>
      <div className="hero-card">
        <div className="hero-card-title">
          <h2>Great coffee made simple.</h2>
        </div>
        <div className="hero-card-description">
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
        </div>
        <div className="hero-card-button">
          <button className="button-main" onClick={() => navigate("/plan")}>
            Create your plan
          </button>
        </div>
      </div>
    </section>
  );
}
export default HeroCard;
