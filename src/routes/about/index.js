import AboutCommitment from "../../components/About/About Commitment";
import AboutHeroCard from "../../components/About/About Hero Card";
import AboutQuality from "../../components/About/About Quality";
import Layout from "../../layout";

function AboutUs() {
  return (
    <Layout>
      <AboutHeroCard />
      <AboutCommitment />
      <AboutQuality />
    </Layout>
  );
}

export default AboutUs;
