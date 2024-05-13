import FeaturesProperties from "../components/FeaturesProperties";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <HowItWorks/>
    <FeaturesProperties/>
    <Services/>
    <About/>
    <Testimonials/>
    <Faq/>
    <Footer/>
  </>
  );
}
