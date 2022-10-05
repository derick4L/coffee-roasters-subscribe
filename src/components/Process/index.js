import { useNavigate } from "react-router-dom";

import "./styles.css";

function TheProcess() {
  let navigate = useNavigate();

  return (
    <div className="the-process">
      <div className="the-process-title">
        <p>How it works</p>
      </div>
      <div className="the-process-cards">
        <div className="the-process-card">
          <div className="the-process-card-content">
            <h1>01</h1>
            <h4>Pick your coffee</h4>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
        </div>
        <div className="the-process-card">
          <div className="the-process-card-content">
            <h1>02</h1>
            <h4>Choose the frequency</h4>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
        </div>
        <div className="the-process-card">
          <div className="the-process-card-content">
            <h1>03</h1>
            <h4>Receive and enjoy!</h4>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
      </div>
      <div className="the-process-card-button">
        <button className="button-main" onClick={() => navigate("/plan")}>
          Create your plan
        </button>
      </div>
    </div>
  );
}
export default TheProcess;
