import CollectionCards from "../../components/Collection Cards";
import HeroCard from "../../components/Hero Card";
import Layout from "../../layout";

import "./styles.css";

function Main() {
  return (
    <Layout>
      <div className="hero-container">
        <HeroCard />
      </div>
      <div className="collection-container">
        <CollectionCards />
      </div>
    </Layout>
  );
}

export default Main;
