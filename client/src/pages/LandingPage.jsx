// LandingPage.jsx
import HeroSection from "../sections/HeroSection";
import About from "./About";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default LandingPage;
