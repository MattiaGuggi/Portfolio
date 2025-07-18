import { useEffect, useRef, useState } from "react";

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
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<{ x: number; top: boolean }[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const newPositions = iconRefs.current.map((icon, index) => {
        if (!icon) return { x: 0, top: index % 2 === 0 };
        const iconRect = icon.getBoundingClientRect();
        return {
          x: iconRect.left + iconRect.width / 2 - rect.left,
          top: index % 2 === 0,
        };
      });

      setPositions(newPositions);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  return (
    <section
      id="tech"
      className="min-h-[60vh] w-full flex flex-col items-center justify-center py-10 px-4 sm:px-10"
    >
      <h1 className="text-4xl font-bold text-indigo-700 text-center mb-12">
        Tech I Use
      </h1>

      <div className="relative w-full max-w-6xl h-[400px]" ref={containerRef}>
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
          />

          {/* Vertical lines to icons */}
          {techs.map((_, i) => {
            const spacing = 1000 / (techs.length - 1); // space across 1000 viewBox
            const x = i * spacing;
            const top = i % 2 === 0;
            return (
              <line
                key={i}
                x1={x}
                x2={x}
                y1={top ? 140 : 260}
                y2={200}
                stroke="#4338ca"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>

        {/* Icons in 2 rows */}
        <div className="absolute left-0 top-0 w-full h-full">
          {techs.map((tech, index) => {
            const percent = (index / (techs.length - 1)) * 100;
            const topClass = index % 2 === 0 ? "top-[80px]" : "top-[260px]";
            return (
              <div
                key={index}
                ref={(el) => {
                  iconRefs.current[index] = el;
                }}
                className={`absolute ${topClass} flex items-center justify-center w-20 h-20 p-3 rounded-xl shadow-md bg-white/80 backdrop-blur transition-all`}
                style={{
                  left: `${percent}%`,
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
