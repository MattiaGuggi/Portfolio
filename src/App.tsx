import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import SingleProject from "./pages/SingleProject"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'leaflet/dist/leaflet.css';

gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  return (
    <>
        <Header />
        <Home />
        <Projects />
        <Tech />
        <About />
        <Contact />
        <Footer />
    </>
  )
};

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
            start: "top bottom",   // start when top is just entering viewport
            end: "top center",  // end when bottom is mostly in view
            scrub: 0.5,         // smooth interpolation
          },
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <BrowserRouter>
      <main className="flex flex-col min-h-screen w-full bg-gradient-to-br from-indigo-50 to-indigo-200" id="mainPage">
        <Routes>
          <Route path='*' element={<MainPage />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/project/:title' element={<SingleProject />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
