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
      gsap.fromTo(section,
        { opacity: 0,
          y: 50,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: section,
          start: "top 90%",         // when section top hits 80% of viewport
          end: "bottom 10%",        // when bottom reaches 20% of viewport
          toggleActions: "play reverse play reverse",  // replays when scrolling back
          once: false,              // ensures it works both ways
        },
        }
      );
    });
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-indigo-200">
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
