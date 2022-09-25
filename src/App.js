import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./global.css";
import Main from "./routes/main";
import NotFound from "./routes/404";
import AboutUs from "./routes/about";
import Plan from "./routes/plan";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
