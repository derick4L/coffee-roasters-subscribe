import CollectionCards from "../../components/Home/Collection Cards";
import Footer from "../../components/Global/Footer";
import HeroCard from "../../components/Home/Hero Card";
import TheProcess from "../../components/Home/Process";
import WhyUs from "../../components/Home/Why Us";
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
      <div className="why-us-container">
        <WhyUs />
      </div>
      <div className="process-container">
        <TheProcess />
      </div>
    </Layout>
  );
}

export default Main;
