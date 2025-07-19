import { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const navigate = useNavigate();

  const viewProject = (title: string) => {
    navigate(`/project/${title}`);
  };

  const projects: [string, string, string[]][] = [
    ["Spotify Dashboard", "A React dashboard for my personal Spotify analytics and organization based on a python server.", ["./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg"]],
    ["Bar Service", "A React App to see all cocktails and create new ones.", ["/vite.svg"]],
    ["FantaBalzo", "A fantasy game for bids on whoever would skip school tests.", ["/vite.svg"]],
    ["Polls App", "A Next.js-based app to let users play/create polls.", ["/vite.svg"]],
    ["Project Volta", "A Django-based virtual museum platform for and cultural institutions.", ["/vite.svg"]],
    ["Voice Recognition App", "AI-powered voice recognition using Python and dlib.", ["/vite.svg"]],
    ["Face Recognition App", "AI-powered face recognition using Python and dlib.", ["/vite.svg"]],
    ["Text Summarization App", "AI-powered text summarization using Python.", ["/vite.svg"]],
  ];


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
          },
        }
      })

      row.addEventListener('mouseenter', () => {
        row.style.transform = ' scale(1.05)'; // Dangerous if already has transform
      });

      row.addEventListener('mouseleave', () => {
        row.style.transform = row.style.transform.replace(/scale\([^)]*\)/, '');
      });
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
          {projects.map(([title, desc, images], idx) => (
            <li
              key={idx}
              className="project-item bg-white/80 rounded-xl shadow-custom p-6 pb-4 text-left cursor-pointer duration-400 transition-all hover:scale-105"
              onClick={() => viewProject(title)}
            >
              <span className="text-xl font-semibold text-indigo-800">{title}</span>
              <p className="text-indigo-900">{desc}</p>
              <div className="grid grid-cols-5 place-content-center gap-2 px-2 mt-2">
                {images.map((img, index) => (
                  <img key={index} src={img} alt={title} className="rounded-lg mx-2" />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
