import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import DirectorMessage from "./components/DirectorMessage";
import Faq from "./components/Faq";
import InquiryForm from "./components/InqueryForm";
import Footer from "./components/Footer";
import ProjectGallery from "./components/ProjectGAallery";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Header */}
      <Navbar />

      {/* Hero Slider */}
      <Hero />

      <ClientsSection />

      {/* About Company */}
      <About />

      <Services />
      {/* WhyChooseUs */}
      <WhyChooseUs />

      <ProjectGallery />

      {/* DirectorMessage */}
      <DirectorMessage />

      <InquiryForm />

      {/* FAQ*/}
      <Faq />




      {/* Footer */}
      <Footer />


      {/* Floating utilities */}
      <WhatsAppButton />

      <ScrollToTop />
    </div >
  );
}

export default App;
