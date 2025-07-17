import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import gsap from "gsap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
    e.preventDefault();
    const section = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  // Detect desktop view
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      setIsOpen(false);
      if (dropdownRef.current) dropdownRef.current.style.height = "";
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animate mobile dropdown
  useEffect(() => {
    if (dropdownRef.current) {
      const el = dropdownRef.current;

      if (isOpen) {
        el.style.display = "flex";
        gsap.fromTo(
          el,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.inOut",
          }
        );
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            el.style.display = "none";
            el.style.height = "";
          },
        });
      }
    }
  }, [isOpen]);

  return (
    <header className="px-8 py-6 shadow-lg flex items-center justify-between bg-white/80 backdrop-blur border-b border-indigo-200 relative z-50">
      <span className="text-2xl font-bold text-indigo-700 tracking-tight">Mattia Guggi</span>

      {isDesktop ? (
        <nav className="gap-8 text-indigo-700 font-medium flex">
          {["home", "projects", "map", "about", "contact"].map((id) => (
            <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="font-bold text-lg">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      ) : (
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-indigo-700 md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            ref={dropdownRef}
            className="absolute top-full left-0 w-full bg-white shadow-md flex-col items-start px-8 py-4 gap-4 text-indigo-700 md:hidden overflow-hidden"
            style={{ display: "none" }}
          >
            {["home", "projects", "map", "about", "contact"].map((id) => (
              <a key={id} href={`#${id}`} onClick={(e) => handleNavClick(e, id)} className="font-bold text-lg">
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header
