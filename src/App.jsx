import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import Hero from "./components/sections/Hero";
import Specialties from "./components/sections/Specialties";
import CuisineExperience from "./components/sections/CuisineExperience";
import About from "./components/sections/About";
import Gallery from "./components/sections/Gallery";
import Celebrations from "./components/sections/Celebrations";
import Reviews from "./components/sections/Reviews";
import Visit from "./components/sections/Visit";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <CuisineExperience />
        <About />
        <Gallery />
        <Celebrations />
        <Reviews />
        <Visit />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}