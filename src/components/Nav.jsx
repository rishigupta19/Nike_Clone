import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger, closeIcon } from "../assets/icons"; // Add the "X" icon (closeIcon)
import { navLinks } from "../constants/index";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        {/* Navigation links for larger screens */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger or Close Icon */}
        <div
          className="hidden max-lg:block cursor-pointer z-20"
          onClick={toggleMenu}
        >
          <img
            src={isMenuOpen ? closeIcon : hamburger}
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            width={25}
            height={25}
          />
        </div>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-10">
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-white"
                    onClick={toggleMenu} // Close menu on link click
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
