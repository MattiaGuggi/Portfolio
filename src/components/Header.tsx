import { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, type: string) => {
    e.preventDefault();
    setTimeout(() => {
      const section = document.getElementById(type);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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

  useGSAP(() => {
    gsap.fromTo(
      "header",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    );
  }, []);

  return (
    <header
      className="
        px-8 py-6 flex items-center justify-between
        bg-white/80 backdrop-blur border-b border-indigo-200
        shadow-lg
        relative z-50
        transition-shadow transition-colors duration-300
        hover:shadow-xl
        hover:bg-white/95
        rounded-b-lg
      "
    >
      <span
        className="
          text-2xl font-bold text-indigo-700 tracking-tight
          select-none
          transition-transform duration-300
          hover:scale-105
          cursor-default
        "
      >
        Mattia Guggi
      </span>

      {isDesktop ? (
        <nav className="flex gap-10 text-indigo-700 font-semibold tracking-wide">
          {["home", "projects", "about", "tech", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="
                relative
                text-lg
                font-semibold
                cursor-pointer
                transition-colors duration-300
                hover:text-indigo-500
                before:absolute before:-bottom-1 before:left-0 before:h-0.5
                before:w-0 before:bg-indigo-500 before:transition-all before:duration-300
                hover:before:w-full
              "
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      ) : (
        <>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="
              text-indigo-700 p-2 rounded-md
              hover:bg-indigo-100
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-indigo-500
              active:scale-95
            "
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav
            ref={dropdownRef}
            className="
              absolute top-full left-0 w-full bg-white shadow-md
              flex-col items-start px-8 py-6 gap-6 text-indigo-700 md:hidden
              overflow-hidden
              rounded-b-lg
            "
            style={{ display: "none" }}
          >
            {["home", "projects", "map", "about", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="
                  font-semibold text-lg w-full
                  cursor-pointer
                  hover:text-indigo-600
                  transition-colors duration-300
                  select-none
                "
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
