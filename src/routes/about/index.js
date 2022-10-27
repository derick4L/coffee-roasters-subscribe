import AboutCommitment from "../../components/About/About Commitment";
import AboutHeroCard from "../../components/About/About Hero Card";
import AboutHQ from "../../components/About/About HQ";
import AboutQuality from "../../components/About/About Quality";
import Layout from "../../layout";

function AboutUs() {
  return (
    <Layout>
      <AboutHeroCard />
      <AboutCommitment />
      <AboutQuality />
      <AboutHQ />
    </Layout>
  );
}

export default AboutUs;
