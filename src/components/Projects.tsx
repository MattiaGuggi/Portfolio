const Projects = () => {
  return (
    <section id="projects" className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Projects</h2>
        <p className="text-indigo-900 mb-8">A selection of my work, built with modern technologies and a focus on efficiency and design.</p>
        <ul className="space-y-6">
          <li className="bg-white/80 rounded shadow p-6 text-left">
            <span className="text-xl font-semibold text-indigo-800">Project Volta</span>
            <p className="text-indigo-900">A Django-based donation platform for museums and cultural institutions.</p>
          </li>
          <li className="bg-white/80 rounded shadow p-6 text-left">
            <span className="text-xl font-semibold text-indigo-800">Face Recognition App</span>
            <p className="text-indigo-900">AI-powered face recognition using Python and dlib.</p>
          </li>
          <li className="bg-white/80 rounded shadow p-6 text-left">
            <span className="text-xl font-semibold text-indigo-800">Spotify Dashboard</span>
            <p className="text-indigo-900">A React dashboard for Spotify analytics and insights.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
