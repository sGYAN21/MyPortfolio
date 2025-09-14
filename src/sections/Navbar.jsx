import { useState } from "react";
import { motion } from "framer-motion"; // ✅ correct import

function Navigation() {
  return (
    <ul className="nav-ul font-bold text-lg flex flex-col gap-4 sm:flex-row sm:gap-8">
      <li className="nav-li">
        <a className="nav-link hover:text-primary transition-colors" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-primary transition-colors" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-primary transition-colors" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link hover:text-primary transition-colors" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full h-16 backdrop-blur-lg bg-primary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-10 h-auto hover:scale-110 transition-transform">
              <img src="assets/myLogo2.svg" alt="myLogo" />
            </a>
            <a
              href="#"
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
          className="sm:hidden bg-primary/70 backdrop-blur-md text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="py-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;