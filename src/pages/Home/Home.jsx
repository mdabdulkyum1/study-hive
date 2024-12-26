import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Features from "./Features";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Study Hive</title>
      </Helmet>
      <Banner></Banner>
      <Features></Features>
      <Faq></Faq>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
