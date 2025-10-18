import { useState } from "react";
import { motion } from "framer-motion";

function Navigation({ closeMenu }) {
  return (
    <ul className="nav-ul font-bold text-lg flex flex-col gap-4 sm:flex-row sm:gap-8">
      <li className="nav-li">
        <a
          href="#home"
          onClick={closeMenu}
          className="nav-link hover:text-primary transition-colors"
        >
          Home
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#about"
          onClick={closeMenu}
          className="nav-link hover:text-primary transition-colors"
        >
          About
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#experiences"
          onClick={closeMenu}
          className="nav-link hover:text-primary transition-colors"
        >
          Work
        </a>
      </li>

      <li className="nav-li">
        <a
          href="#contact"
          onClick={closeMenu}
          className="nav-link hover:text-primary transition-colors"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full h-16 backdrop-blur-lg bg-primary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="w-10 h-auto hover:scale-110 transition-transform"
              onClick={closeMenu}
            >
              <img src="assets/myLogo2.svg" alt="myLogo" />
            </a>
            <a
              href="#home"
              onClick={closeMenu}
              className="text-2xl font-extrabold transition-colors text-neutral-400 hover:text-white hover:scale-105"
            >
              GYAN SAGAR
            </a>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex sm:hidden cursor-pointer text-neutral-400 hover:text-white focus:outline-none"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          className="sm:hidden bg-primary/88 backdrop-blur-md text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="py-5">
            <Navigation closeMenu={closeMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;