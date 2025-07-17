import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    gsap.to(".animated-char", {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
    });
  }, []);

  return (
    <section id="home" className="flex-1 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-5xl font-bold text-indigo-800">
        { "Welcome To My Portfolio".split("").map((char, i) => (
          <span
            key={i}
            className="animated-char inline-block opacity-0 translate-y-4"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )) }
      </h1>

      <div className="w-full h-[400px] flex items-center justify-center mb-8 mt-10">
        <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center">
          <span className="text-white text-3xl font-bold">Hero Section (GSAP + Three.js)</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
