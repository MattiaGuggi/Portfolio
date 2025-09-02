import { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
  id: string;
};

const Projects: React.FC<SectionProps> = ({ id }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const projects: [string, string, string[]][] = [
    ["Spotify Dashboard", "A React dashboard for my personal Spotify analytics and organization based on a python server.", ["./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg", "./vite.svg"]],
    ["Bar Service", "A React App to see all cocktails and create new ones.", ["/vite.svg"]],
    ["FantaBalzo", "A fantasy game for bids on whoever would skip school tests.", ["/vite.svg"]],
    ["Project Volta", "A Django-based virtual museum platform for and cultural institutions.", ["/vite.svg"]],
    ["Polls App", "A Next.js-based app to let users play/create polls.", ["/vite.svg"]],
    ["Closet App", "Next.js-based app to let users load clothing items and create outfits.", ["/vite.svg"]],
    ["Air bnb", "Next.js-based app to let hosts manage their houses and change easily any detail.", ["/vite.svg"]],
    ["Text Summarization App", "AI-powered text summarization using Python.", ["/vite.svg"]],
  ];

  const viewProject = (title: string) => {
    const overlay = overlayRef.current;

    if (!overlay) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // This avoids a full page reload
        window.location.href = `/projects/${title}`;
      }
    });

    tl.set(overlay, { y: "100%", opacity: 1 }) // Start off-screen (bottom)
      .to(overlay, {
        y: "0%",
        duration: 0.5,
        ease: "power2.inOut",
      });
  };

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
    <>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-indigo-800 z-[9999] pointer-events-none opacity-0"
      />
      <section
        id={id}
        className="min-h-[60vh] w-full flex flex-col items-center justify-center pb-10 pt-5 px-14 xs:px-4"
      >
        <div className="mx-auto text-center mt-5">
          <h2 className="text-3xl font-bold text-indigo-800 mb-5">Projects</h2>
          <p className="text-white/80 mb-10">
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
    </>
  );
};

export default Projects;
