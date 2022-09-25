import HeroCard from "../../components/Hero Card";
import Layout from "../../layout";

import "./styles.css";

function Main() {
  return (
    <Layout>
      <div className="home-container">
        <HeroCard />
      </div>
    </Layout>
  );
}

export default Main;
