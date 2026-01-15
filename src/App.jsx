import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import DirectorMessage from "./components/DirectorMessage";
import Faq from "./components/FAQ";
import InquiryForm from "./components/InqueryForm";
import Footer from "./components/Footer";
// import Solutions from "./components/home/Solutions";
// import Technology from "./components/home/Technology";
// import Workflow from "./components/home/Workflow";
// import Projects from "./components/home/Projects";
// import Clients from "./components/home/Clients";
// import Testimonials from "./components/home/Testimonials";
// import Contact from "./components/home/Contact";
// import Footer from "./components/layout/Footer";

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

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* DirectorMessage */}
      <DirectorMessage />

      <InquiryForm />

      {/* FAQ*/}
      <Faq />


     

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;
