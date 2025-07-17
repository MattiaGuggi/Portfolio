import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Projects = () => {
  const ulRef = useRef<HTMLUListElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>("section#projects li");

    items.forEach((item) => {
      gsap.fromTo(item, {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 95%",
            scrub: 0.5
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="min-h-[60vh] w-full flex flex-col items-center justify-center py-10 px-14 xs:px-4">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Projects</h2>
        <p className="text-indigo-900 mb-8">A selection of my work, built with modern technologies and a focus on efficiency and design.</p>
        <ul ref={ulRef} className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Spotify Dashboard</span>
            <p className="text-indigo-900">A React dashboard for Spotify analytics and insights based on a python server.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Bar Service</span>
            <p className="text-indigo-900">A React App to see all cocktails and create new ones.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">FantaBalzo</span>
            <p className="text-indigo-900">A fantasy game for bids on whoever would skip school tests.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Polls App</span>
            <p className="text-indigo-900">A Next.js-based app to let users play/create polls.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Project Volta</span>
            <p className="text-indigo-900">A Django-based donation platform for museums and cultural institutions.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Voice Recognition App</span>
            <p className="text-indigo-900">AI-powered voice recognition using Python and dlib.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Face Recognition App</span>
            <p className="text-indigo-900">AI-powered face recognition using Python and dlib.</p>
          </li>
          <li className="bg-white/80 rounded-xl shadow-custom p-6 text-left cursor-pointer duration-400 transition-all hover:scale-105">
            <span className="text-xl font-semibold text-indigo-800">Text Summarization App</span>
            <p className="text-indigo-900">AI-powered text summarization using Python.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
