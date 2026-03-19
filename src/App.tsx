import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Metrics from "./components/sections/Metrics";
import Brands from "./components/sections/Brands";
import Services from "./components/sections/Services";
import SampleGallery from "./components/sections/SampleGallery";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Brands />
        <Services />
        <SampleGallery />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
