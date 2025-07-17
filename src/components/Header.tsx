const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, type: string) => {
    e.preventDefault();
    const section = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="px-8 py-6 shadow-lg flex items-center justify-between bg-white/80 backdrop-blur border-b border-indigo-200">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-indigo-700 tracking-tight">Mattia Guggi</span>
      </div>
      <nav className="flex gap-8 text-indigo-700 font-medium">
        <a href="#home" onClick={e => handleNavClick(e, "home")}>Home</a>
        <a href="#projects" onClick={e => handleNavClick(e, "projects")}>Projects</a>
        <a href="#map" onClick={e => handleNavClick(e, "map")}>Map</a>
        <a href="#about" onClick={e => handleNavClick(e, "about")}>About</a>
        <a href="#contact" onClick={e => handleNavClick(e, "contact")}>Contact</a>
      </nav>
    </header>
  )
}

export default Header
