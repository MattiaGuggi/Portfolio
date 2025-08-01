import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Map from "./Map";

gsap.registerPlugin(ScrollTrigger);

type SectionProps = {
  id: string;
};

const Contact: React.FC<SectionProps> = ({ id }) => {
  useEffect(() => {
    const inputs = gsap.utils.toArray<HTMLElement>("#formContainer > *");

    inputs.forEach((row) => {
      gsap.fromTo(row, {
        y: 50,
        opacity: 0,
        scale: 0.7
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power3.out',
        stagger: 0.25,
        scrollTrigger: {
          trigger: '#formContainer',
          start: "top 85%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        }
      })

      if((row as HTMLInputElement).value == 'Send') {
        row.addEventListener('mouseenter', () => {
          row.style.transform = ' scale(1.05)'; // Dangerous if already has transform
        });

        row.addEventListener('mouseleave', () => {
          row.style.transform = row.style.transform.replace(/scale\([^)]*\)/, '');
        });
      }
    });
  }, []);

  return (
    <section id={id} className="min-h-[40vh] flex flex-col items-center justify-center px-14 xs:px-4 py-10">
      <div className="flex w-full px-4 xs:flex-col sm:flex-col xs:px-0 md:flex-row gap-20">
        {/* Map and Form each take 50% in md+ screens */}
        <div className="xs:w-full sm:w-full w-1/2 lg:w-1/2">
          <Map />
        </div>

        <div className="md:w-1/2 w-full max-w-2xl text-center py-10">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">Contact</h2>
          <p className="text-white/80 mb-8">Feel free to reach out for collaborations, questions, or just to say hello!</p>
          <form className="space-y-6 w-full" id='formContainer'>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="submit"
              value="Send"
              className="cursor-pointer w-full px-6 py-2 rounded bg-indigo-800 text-white font-semibold hover:bg-indigo-900 transition-all duration-400 hover:scale-105"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
