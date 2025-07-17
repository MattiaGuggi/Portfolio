import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
import gsap from "gsap"

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "restart none none none",
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
          <Contact />
          <Footer />
        </main>
    </>
  )
}

export default App
