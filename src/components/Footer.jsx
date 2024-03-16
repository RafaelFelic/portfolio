import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FOOTER_ITEMS, SOCIAL_LINKS } from '../utils/data';
import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer className="flex flex-col font-['Raleway'] text-black">
      <div className="flex justify-evenly bg-gray-400 shadow-2xl m-2.5 mx-12 p-5 rounded-full">
        <menu>
          <h3 className="font-extrabold">MENU</h3>
          <ul>
            {FOOTER_ITEMS.map((item) => (
              <li key={item.id} className="text-gray-800 hover:text-cyan-900">
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </menu>
        <div className="flex items-center justify-center">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="text-5xl m-2 text-gray-800 hover:text-cyan-900"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          ))}
        </div>
      </div>
      <span className="w-full mt-5 font-dos text-gray-300 text-center">
        2024 - Rafael Feliciano - All rights reserved
      </span>
    </footer>
  );
}