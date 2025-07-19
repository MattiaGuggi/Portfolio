import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("#boxContainer li").forEach((row, idx) => {
      gsap.fromTo(row, {
        y: 50,
        opacity: 0,
        scale: 0.7
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: row,
          start: "top bottom",
          end: "top 40%",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            row.style.transform = `translateY(${progress * idx})`
          }
        }
      })
    });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-[60vh] w-full flex flex-col items-center justify-center pb-10 pt-5 px-14 xs:px-4"
    >
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Projects</h2>
        <p className="text-indigo-900 mb-8">
          A selection of my work, built with modern technologies and a focus on efficiency and design.
        </p>
        <ul id='boxContainer' className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
          {[
            ["Spotify Dashboard", "A React dashboard for Spotify analytics and insights based on a python server."],
            ["Bar Service", "A React App to see all cocktails and create new ones."],
            ["FantaBalzo", "A fantasy game for bids on whoever would skip school tests."],
            ["Polls App", "A Next.js-based app to let users play/create polls."],
            ["Project Volta", "A Django-based donation platform for museums and cultural institutions."],
            ["Voice Recognition App", "AI-powered voice recognition using Python and dlib."],
            ["Face Recognition App", "AI-powered face recognition using Python and dlib."],
            ["Text Summarization App", "AI-powered text summarization using Python."],
          ].map(([title, desc], idx) => (
            <li
              key={idx}
              className="project-item bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105"
            >
              <span className="text-xl font-semibold text-indigo-800">{title}</span>
              <p className="text-indigo-900">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
