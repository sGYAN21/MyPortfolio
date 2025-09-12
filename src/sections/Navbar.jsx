import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul font-bold text-sl ">
      <li className="nav-li">
        <a className="nav-link" href="Home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="contact">
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full h-13 backdop-blur-lg bg-primary/50">
      <div className="mx-auto c-space max-w-7xl h-auto">
        <div className="flex items-center justify-between py-3 sm:py-0">
          <div className="flex gap-3 py-2">
            <a href="#"  className="w-10 h-auto  hover:scale-120">
              <img src="assets/myLogo2.svg" alt="myLogo" />
            </a>
          <a
            href=""
            className="text-2xl font-extrabold trasition-colors text-neutral-400 hover:text-white hover:scale-110"
            >
            GYAN SAGAR
          </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden "
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};
export default Navbar;
