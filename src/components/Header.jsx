import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HEADER_ITEMS, SOCIAL_LINKS } from "../utils/data";
import { scrollToSection } from "../utils/scroll";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Step 1: Ref for the menu

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header
      className="flex justify-between items-center bg-[#DAE4E9] relative"
      id="home"
    >
      <div
        className="flex items-center justify-between flex-grow"
        ref={menuRef}
      >
        <button
          className="p-2 md:hidden" // Show only on mobile
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>
        {/* Main Content Container: Ensures content alignment on desktop */}
        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex justify-center flex-grow bg-[#DAE4E9] absolute md:relative top-full left-0 md:bg-transparent rounded-br-3xl z-10`}
        >
          <ul className="flex flex-col md:flex-row w-full h-full m-1">
            {HEADER_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className="text-[#4169E1] hover:text-[#DAE4E9] 
                    hover:bg-[#4169E1]
                    hover:shadow-[5px_5px_0px_2px_#000]
                    md:hover:shadow-[10px_10px_0px_2px_#000]
                    hover:rounded-md                     
                    m-3 md:m-2 p-1 md:p-2 text-left md:text-center                   
                    text-lg md:text-xl lg:text-2xl 
                    xl:text-3xl
                   "
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links - Always on the right */}
        <div className="absolute right-0 flex text-3xl md:text-4xl lg:text-5xl h-full z-20">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-black flex items-center justify-center px-2.5 hover:text-[#4169E1]"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
