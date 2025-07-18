import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo("#home",
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    tl.to(".animated-char", {
      opacity: 1,
      y: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.9"); // start overlapping with previous animation
  }, []);

  return (
    <section
      id="home"
      className="flex-1 flex flex-col items-center justify-center px-14 xs:px-4 py-20 text-center"
    >
      <h1 className="text-5xl xs:text-4xl font-bold text-indigo-800 leading-snug mb-6">
        {"Welcome To My Portfolio".split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-2">
            {word.split("").map((char, charIndex) => (
              <span
                key={`${wordIndex}-${charIndex}`}
                className="animated-char inline-block opacity-0 translate-y-4"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <p className="text-lg text-indigo-900 max-w-2xl mb-8">
        I'm <strong>Mattia Guggi</strong>, a full-stack developer with a passion for building sleek, performant web apps using <span className="text-indigo-700 font-semibold">Next.js</span>, <span className="text-indigo-700 font-semibold">React</span>, <span className="text-indigo-700 font-semibold">Node.js</span>, and <span className="text-indigo-700 font-semibold">Python</span>. I focus on simplicity, speed, and elegant UI/UX.
      </p>

      <div className="flex gap-6 mb-12">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-700 text-white font-semibold rounded-lg hover:bg-indigo-800 transition duration-300 xs:px-4 xs:py-2"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-indigo-700 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-700 hover:text-white transition duration-300 xs:px-4 xs:py-2"
        >
          Contact Me
        </a>
      </div>

      <div className="w-full max-w-xl h-[300px] bg-indigo-100 rounded-xl shadow-inner flex items-center justify-center text-indigo-400 text-xl">
        (Image or animation placeholder)
      </div>
    </section>
  );
};

export default Home;
