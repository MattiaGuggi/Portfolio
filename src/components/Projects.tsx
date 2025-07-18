import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".project-item");

    const getColumns = () => {
      const width = window.innerWidth;
      if (width < 425) return 1; // xs
      if (width < 725) return 2; // sm
      if (width < 1024) return 2; // md
      return 4; // default
    };

    const animateRows = () => {
      const cols = getColumns();
      const rows = [];

      // Group items into rows
      for (let i = 0; i < items.length; i += cols) {
        rows.push(items.slice(i, i + cols));
      }

      rows.forEach((row) => {
        row.forEach((item) => {
          gsap.set(item, { opacity: 0, y: 50, scale: 0.8 });

          ScrollTrigger.create({
            trigger: item,
            start: "top 95%",
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            },
            onLeaveBack: () => {
              gsap.to(item, {
                opacity: 0,
                y: 50,
                scale: 0.8,
                duration: 0.4,
                ease: "power2.in",
              });
            },
          });
        });
      });
    };

    animateRows();
    window.addEventListener("resize", () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      animateRows();
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener("resize", animateRows);
    };
  }, []);

  return (
    <section
      id="projects"
      className="min-h-[60vh] w-full flex flex-col items-center justify-center py-10 px-14 xs:px-4"
    >
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Projects</h2>
        <p className="text-indigo-900 mb-8">
          A selection of my work, built with modern technologies and a focus on efficiency and design.
        </p>
        <ul className="grid grid-cols-4 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12">
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
