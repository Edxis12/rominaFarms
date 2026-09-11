import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Gallery from "./components/Gallery";
import NextDerby from "./components/HowItWorks";
import Facilities from "./components/Services";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <NextDerby />
      <Facilities />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;