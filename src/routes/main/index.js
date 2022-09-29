import CollectionCards from "../../components/Collection Cards";
import Footer from "../../components/Footer";
import HeroCard from "../../components/Hero Card";
import TheProcess from "../../components/Process";
import WhyUs from "../../components/Why Us";
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
      <div className="footer-container">
        <Footer />
      </div>
    </Layout>
  );
}

export default Main;
