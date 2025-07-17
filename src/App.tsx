import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Map from "./components/Map"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import 'leaflet/dist/leaflet.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    const sections = gsap.utils.toArray<HTMLElement>("section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 95%",   // start when top is just entering viewport
            end: "bottom 80%",  // end when bottom is mostly in view
            scrub: 0.5,         // smooth interpolation
          },
        }
      );
    });
  }, []);

  return (
    <>
      <main className="min-h-screen w-full flex flex-col bg-gradient-to-br from-indigo-50 to-indigo-200">
          <Header />
          <Home />
          <Projects />
          <About />
          <Map />
          <Contact />
          <Footer />
        </main>
    </>
  )
}

export default App
