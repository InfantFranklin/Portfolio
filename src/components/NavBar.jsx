import React, { useEffect, useMemo, useCallback, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(() => [
    { id: "home", link: "home", label: "Home" },
    { id: "about", link: "about", label: "About" },
    { id: "portfolio", link: "portfolio", label: "Projects" },
    { id: "experience", link: "experience", label: "Skills" },
    { id: "contact", link: "contact", label: "Contact" },
  ],[]);

  const handleNavtoggle = useCallback(()=>{
    setNav((prev) => !prev);
  },[])

  useEffect(() => {
    const handleScroll = () => {
      // Navbar shadow on scroll
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = links.map((l) =>
        document.querySelector(`[name="${l.link}"]`),
      );
      const scrollPos = window.scrollY + 100;
      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      // If user is at the bottom of the page, highlight Contact
      if (pageBottom) {
        setActiveSection("contact");
        return;
      }

      sections.forEach((section, index) => {
        if (!section) return;
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(links[index].link);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  return (
    <div
      className={`flex justify-between items-center w-full h-16 sm:h-20 px-4 sm:px-6 text-white bg-black fixed z-50 border-b border-gray-800 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-black/50" : ""}`}
    >
      {/* Logo */}
      <Link to="home" smooth duration={500} className="cursor-pointer">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <span className="text-white font-bold text-sm sm:text-lg tracking-tight">
              IF
            </span>
          </div>
          <span className="hidden sm:block text-xs text-gray-400 font-medium tracking-widest uppercase">
            Infant Franklin
          </span>
        </div>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-1">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <Link
              to={link}
              smooth
              duration={500}
              offset={-80}
              className={`px-4 py-2 rounded-md cursor-pointer text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200 block ${
                activeSection === link
                  ? "text-white bg-gray-800"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Toggle */}
      <div
        onClick={handleNavtoggle}
        className="cursor-pointer z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900 z-40">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/30">
            <span className="text-white font-bold text-xl tracking-tight">
              IF
            </span>
          </div>
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="py-4 text-xl cursor-pointer text-gray-300 hover:text-cyan-400 duration-200"
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={500}
                offset={-80}
              >
                {label}
              </Link>
            </li>
          ))}
          {/* Resume Downloads — mobile only */}
          <li className="pt-4 flex flex-col items-center gap-3">
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              Download Resume
            </p>
            <div className="flex gap-3">
              <a
                href="/infant-resume-frontend.pdf"
                download
                onClick={() => setNav(false)}
                className="px-4 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm hover:scale-105 duration-300"
              >
                Frontend ↓
              </a>

              <a
                href="/infant-resume-fullstack.pdf"
                download
                onClick={() => setNav(false)}
                className="px-4 py-2 rounded-md border border-cyan-500 text-cyan-400 text-sm hover:scale-105 duration-300"
              >
                Fullstack ↓
              </a>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
