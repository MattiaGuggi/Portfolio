const Home = () => {
  return (
    <section id="home" className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        {/* Hero Section: GSAP + Three.js canvas can be added here */}
        <h1 className="font-bold text-5xl mb-10 text-white">Welcome to <span className="bg-gradient-from-tl from-indigo-300 to-indigo-700">My Next App</span></h1>
        <div className="w-full h-[400px] flex items-center justify-center mb-8">
            {/* Example placeholder for Three.js canvas */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-indigo-500 rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-white text-3xl font-bold">Hero Section (GSAP + Three.js)</span>
            </div>
        </div>
    </section>
  );
};

export default Home;
