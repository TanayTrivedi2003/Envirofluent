import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientsSection from "./components/ClientsSection";
import About from "./components/About";
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

      {/* Solutions */}
      {/* <Solutions /> */}

      {/* Technology */}
      {/* <Technology /> */}

      {/* Water & Wastewater Workflow */}
      {/* <Workflow /> */}

      {/* Projects */}
      {/* <Projects /> */}

      {/* Clients & Certifications */}
      {/* <Clients /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Contact */}
      {/* <Contact /> */}

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
