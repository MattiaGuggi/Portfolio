const About = () => {
  return (
    <section id="about" className="min-h-[40vh] flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">About Me</h2>
          <p className="text-indigo-900 mb-8">Hi, I'm Mattia Guggi, a passionate developer focused on building efficient, modern, and minimalistic web applications. I love working with Next.js, React, and Python to create impactful digital experiences.</p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/MattiaGuggi" target="_blank" rel="noopener" className="transition-all duration-400 hover:scale-105 px-6 py-2 rounded bg-indigo-700 text-white font-semibold hover:bg-indigo-800">GitHub</a>
            <a href="https://linkedin.com/in/mattiaguggi" target="_blank" rel="noopener" className="transition-all duration-400 hover:scale-105 px-6 py-2 rounded bg-indigo-700 text-white font-semibold hover:bg-indigo-800">LinkedIn</a>
          </div>
      </div>
    </section>
  );
};

export default About;
