import Hero from "./Hero";
import Clients from "./Clients";
import CaseStudies from "./CaseStudies";
import RecentWork from "./RecentWork";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "../styles.css";


const Home = () => {
  return (
    <>

      <Navbar/>
      <Hero />
      <Clients />
      <CaseStudies />
      <RecentWork />  
      <Contact />
    </>
  );
};

export default Home;
