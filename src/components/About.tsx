import { Download } from "lucide-react";
import Scene from "./Scene";

type SectionProps = {
  id: string;
};

const About: React.FC<SectionProps> = ({ id }) => {
  return (
    <>
      <section id={id} className="flex flex-col items-center justify-start px-14 xs:px-4 py-10 bg-gradient-to-br from-indigo-300 to-indigo-500 h-[1500px]">
        <div className="max-w-2xl mx-auto text-center my-7 h-[1000px] flex flex-col justify-start items-center gap-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h2>
          <p className="text-white/80 mb-8">Hi, I'm Mattia Guggi, a passionate developer focused on building efficient, modern, and minimalistic web applications. I love working with Next.js, React, and Python to create impactful digital experiences.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/MattiaGuggi"
              target="_blank"
              rel="noopener"
              className="transition-all duration-400 hover:scale-105 px-6 py-2 rounded bg-indigo-800 text-white font-semibold hover:bg-indigo-900"
            >
              GitHub
            </a>
            <a href="https://linkedin.com/in/mattiaguggi"
              target="_blank"
              rel="noopener"
              className="transition-all duration-400 hover:scale-105 px-6 py-2 rounded bg-indigo-800 text-white font-semibold hover:bg-indigo-900"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="/files/MattiaGuggi_Resume.pdf"
            download="MattiaGuggi_Resume.pdf"
            target="_blank"
            rel="noopener"
            className="w-2/5 cursor-pointer mb-20 transition-all flex duration-400 hover:scale-105 px-8 py-4 rounded-lg bg-indigo-800 text-white font-semibold hover:bg-indigo-900"
          >
            <Download />Download My Resume
          </a>
          <Scene />
        </div>
      </section>
    </>
  );
};

export default About;
