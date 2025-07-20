import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techs = [
  "typescript/typescript-original.svg",
  "nextjs/nextjs-original-wordmark.svg",
  "django/django-plain.svg",
  "python/python-original.svg",
  "mongodb/mongodb-original-wordmark.svg",
  "express/express-original-wordmark.svg",
  "react/react-original.svg",
  "nodejs/nodejs-original-wordmark.svg",
];

const Tech = () => {
  const centralLineRef = useRef<SVGLineElement | null>(null);
  const verticalLinesRef = useRef<SVGLineElement[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<number>(2); // default to 2 rows for large screens

  const getRows = () => {
    const width = window.innerWidth;
    if (width < 425) return 8; // xs
    if (width < 725) return 4; // sm
    if (width < 1024) return 4; // md
    return 2; // lg
  };

  
  useEffect(() => {
    const handleResize = () => {
      setRows(2);
    };

    handleResize(); // set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const icons = gsap.utils.toArray<HTMLElement>("#techContainer div");
    const line = centralLineRef.current;
    const verticalLines = verticalLinesRef.current;

    if (!line || verticalLines.length === 0 || icons.length === 0) return;

    const lineLength = line.getTotalLength();

    icons.forEach(icon => {
      gsap.set(icon, {
        opacity: 0,
        y: 50,
        scale: 0.8
      });
    });

    gsap.set(line, {
      strokeDasharray: lineLength,
      strokeDashoffset: lineLength,
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#tech",
        start: "center center",
        end: "+=750 center",
        scrub: true,
        pin: true,
        pinSpacing: false,
        markers: true,
      }
    });

    // Animate the main horizontal line
    timeline.to(line, {
      strokeDashoffset: 0,
      ease: "none",
    });

    // Animate each vertical line outward from center (y=200)
    verticalLines.forEach((vLine, i) => {
      const rowIndex = i % rows;
      const rowSpacing = 180 / (rows - 1);
      const yTarget = 80 + rowSpacing * rowIndex;

      timeline.to(vLine, {
        attr: {
          y1: yTarget, // Decide whether to grow upward or downward
        },
        ease: "power1.out",
        duration: 0.3,
      }, "<+" + i * 0.03); // slightly staggered
    });

    // Animate icons
    timeline.to(icons, {
      stagger: 0.05,
      opacity: 1,
      scale: 1,
      y: 0,
    }, "<");

  }, [rows]);

  return (
    <section
      id="tech"
      className="min-h-[60vh] w-full flex flex-col items-center justify-center py-10 px-4 sm:px-10 mt-20 mb-[750px]"
    >
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-12">
        Tech I Use
      </h1>

      <div className="relative w-full max-w-6xl h-[400px] mb-32" ref={containerRef}>
        {/* Bus line and vertical connectors */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 400"
          preserveAspectRatio="none"
        >
          {/* Bus line */}
          <line
            x1="0"
            y1="200"
            x2="1000"
            y2="200"
            stroke="#4338ca"
            strokeWidth="2"
            ref={centralLineRef}
          />

          {/* Vertical lines to icons */}
          {techs.map((_, i) => {
            const spacing = 1000 / (techs.length - 1); // space across 1000 viewBox
            const x = i * spacing;
            return (
              <line
                key={i}
                x1={x}
                x2={x}
                y1={200}
                y2={200}
                stroke="#4338ca"
                strokeWidth="1.5"
                ref={(el) => {
                  if (el) verticalLinesRef.current[i] = el;
                }}
              />
            );
          })}
        </svg>

        {/* Icons in rows */}
        <div className="absolute left-0 top-0 w-full h-full" id="techContainer">
          {techs.map((tech, index) => {
            const percent = (index / (techs.length - 1)) * 100;
            const rowIndex = index % rows;
            const rowSpacing = 180 / (rows - 1); // vertical spacing across 180px (between 80 and 260)
            const top = 80 + rowSpacing * rowIndex;

            return (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={`absolute flex items-center justify-center w-20 h-20 p-1 rounded-xl shadow-md bg-white/80 backdrop-blur cursor-pointer transition-all `}
                style={{
                  left: `${percent}%`,
                  top: `${top}px`,
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech}`}
                  alt={tech.split("/")[0]}
                  className="object-contain h-8"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tech;
