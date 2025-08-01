import { useNavigate, useParams } from "react-router-dom"
import Footer from "../components/Footer";
import { MoveLeft } from "lucide-react";
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const SingleProject = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef<HTMLDivElement>(null);
  const icons = [
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", name: "Typescript"},
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg", name: "Next.js"},
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg", name: "MongoDB"},
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg", name: "Express"},
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", name: "React"},
    {image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", name: "Node.js"},
  ];

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) return;

    const tl = gsap.timeline();

    tl.set(overlay, { y: "0%", opacity: 1, pointerEvents: 'auto' })
      .to(overlay, {
        y: "-100%",
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(overlay, { opacity: 0, pointerEvents: 'none' });
        }
      });
  }, []);

  useEffect(() => {
    gsap.utils.toArray<HTMLElement>("#iconContainer img").forEach((icon, idx) => {
      gsap.fromTo(icon, {
        y: 50,
        opacity: 0,
        scale: 0.7
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: icon,
          start: "top bottom",
          end: "top 40%",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            icon.style.transform = `translateY(${progress * idx})`
          },
        }
      })
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [title]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-indigo-800 z-[9999] pointer-events-none opacity-0"
      />
      <section id="single-project" className="min-h-[60vh] w-full flex flex-col items-center justify-center mb-20 pb-10 pt-5 px-14 xs:px-4">
        <MoveLeft onClick={() => navigate('/#projects')} className="cursor-pointer duration-400 transition-all scale-125 hover:scale-150 text-indigo-600 relative" />
        <h1 className="font-bold text-5xl xs:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-100 via-indigo-400 to-indigo-600 leading-snug mb-6">{title}</h1>
        <p className="text-lg text-white/80 max-w-2xl mb-8 text-center">
          A React project based on an API that lets users search for <span className='text-indigo-700 font-semibold'>drinks</span> and 
          <span className='text-indigo-700 font-semibold'> cocktails</span>, aswell as <span className='text-indigo-700 font-semibold'>create new drinks </span> 
          with custom photos and names
          </p>
        <div className="w-full flex flex-col py-10 xs:px-4 px-14 text-center mx-auto h-full">
          <div className="flex flex-col h-full">
            <h1 className="text-3xl font-bold text-indigo-800 py-5">Demo</h1>
            <video autoPlay muted playsInline preload="auto" src={`/demo/${title}`} className="shadow-custom h-1/2"></video>
          </div>
          <div className="flex flex-col mb-20">
            <h1 className="text-3xl font-bold text-indigo-800 py-5 mt-10">Tools I used</h1>
            <div id="iconContainer" className="flex items-center justify-center gap-10 mt-9">
              {icons.map(({ name, image }, idx) => (
                <img key={idx} src={image} alt={name} className="w-32 h-32 shadow-lg rounded-2xl p-5 cursor-pointer duration-400 transition-all hover:scale-110" />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-3xl font-bold text-indigo-800 py-5">Link</h3>
            <a
              href='https://github.com/MattiaGuggi/bar_service'
              className="w-auto px-12 py-3 rounded-lg text-white bg-indigo-800 cursor-pointer duration-400 transition-all hover:scale-105
              hover:bg-indigo-900 hover:-translate-y-1"
            >
              Github Repo
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SingleProject