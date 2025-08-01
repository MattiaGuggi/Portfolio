'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Header from "./Header";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
  id: string;
};

const Home: React.FC<SectionProps> = ({ id }) => {
  const wrapperRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=1250",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // 1. Fade out background
    tl.to(bgRef.current, {
      opacity: 0,
      ease: "power1.out",
    });

    // 2. Scale down welcome text (start AFTER background faded out)
    tl.fromTo(textRef.current, {
      scale: 125,
      x: 1500
    }, {
      scale: 1,
      x: 0,
      ease: "power1.out"
    }, "<");

    // 3. Fade in header (AFTER the text)
    tl.fromTo(headerRef.current, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 0.1
    });

    // 4. Fade in content (AFTER the header)
    tl.fromTo(contentRef.current, {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 0.7
    });
  });

  return () => ctx.revert();
}, []);

  return (
    <>
      <main className="w-full bg-gradient-to-br bg-gradient-to-tr from-[#1e1b4b] via-[#1e293b] to-[#0f172a]">
        {/* All-in-One Pinned Section */}
        <Header ref={headerRef} />
        <section
          ref={wrapperRef}
          id={id}
          className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 text-center pt-36"
        >
          {/* Background Image */}
          <div ref={bgRef} className="absolute inset-0 w-full h-full z-0 flex justify-center pointer-events-none">
            <h1 className="font-bold text-5xl text-center absolute font-mytextfont text-white bottom-96">Scroll to reveal</h1>
            <img
              src="images/bg.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Welcome Text */}
          <h1
            ref={textRef}
            className="text-6xl xs:text-4xl font-bold text-indigo-800 z-10 font-myfont mt-12"
          >
            Welcome To My Portfolio
          </h1>

          {/* Main Content (fades in) */}
          <div ref={contentRef} className="z-10 pt-16 max-w-4xl">
            <p className="text-lg text-white/80 max-w-2xl mb-8 mx-auto">
              I'm <strong>Mattia Guggi</strong>, a full-stack developer with a passion for building sleek, performant web apps using{" "}
              <span className="text-indigo-700 font-semibold">Next.js</span>,{" "}
              <span className="text-indigo-700 font-semibold">React</span>,{" "}
              <span className="text-indigo-700 font-semibold">Node.js</span>, and{" "}
              <span className="text-indigo-700 font-semibold">Python</span>. I focus on simplicity, speed, and elegant UI/UX.
            </p>

            <div className="flex gap-6 mb-12 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-lg hover:bg-indigo-900 transition duration-300 xs:px-4 xs:py-2"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-indigo-800 text-indigo-800 font-semibold rounded-lg hover:bg-indigo-800 hover:text-white transition duration-300 xs:px-4 xs:py-2"
              >
                Contact Me
              </a>
            </div>

            <div className="w-full max-w-xl h-[300px] bg-indigo-100 rounded-xl shadow-inner flex items-center justify-center text-indigo-400 text-xl mb-16 mx-auto">
              (Image or animation placeholder)
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
