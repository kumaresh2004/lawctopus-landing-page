import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import WhyJoin from "../components/WhyJoin/WhyJoin";
import Curriculum from "../components/Curriculum/Curriculum";
import Faculty from "../components/Faculty/Faculty";
import Testimonials from "../components/Testimonials/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="trust">
        <TrustBar />
      </section>

      <section id="why">
        <WhyJoin />
      </section>

      <section id="curriculum">
        <Curriculum />
      </section>

      <section id="faculty">
        <Faculty />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </>
  );
}

export default Home;