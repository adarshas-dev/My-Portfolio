import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");

  const baseClass =
    "flex items-center gap-2 rounded-full py-2 px-4 text-sm font-medium transition";
  const activeClass = "bg-[#8851efee] text-white shadow-[0_0_30px_rgba(127,77,227,0.5)] scale-105";
  const inactiveClass = "text-white hover:bg-[#7146c1ee] hover:scale-105 transition";

  return (
    <header className="sticky top-6 flex justify-center z-50 ">
      <nav className=" flex items-center gap-2 rounded-full bg-white/5 backdrop-blur-xl py-2 px-6  shadow-[0_0_30px_rgba(127,77,227,0.1)] border border-white/5">
        <a
          href="#home"
          onClick={() => setActive("Home")}
          className={`${baseClass} ${
            active === "Home" ? activeClass : inactiveClass
          }`}
        >
          <i className="fa-solid fa-house text-xs"></i>
          Home
        </a>

        <a
          href="#about"
          onClick={() => setActive("About")}
          className={`${baseClass} ${
            active === "About" ? activeClass : inactiveClass
          }`}
        >
          <i className="fa-solid fa-address-card"></i>
          About
        </a>

        <a
          href="#projects"
          onClick={() => setActive("Projects")}
          className={`${baseClass} ${
            active === "Projects" ? activeClass : inactiveClass
          }`}
        >
          <i className="fa-solid fa-diagram-project"></i>
          Projects
        </a>

        <a
          href="#skills"
          onClick={() => setActive("Skills")}
          className={`${baseClass} ${
            active === "Skills" ? activeClass : inactiveClass
          }`}
        >
          <i className="fa-solid fa-laptop"></i>
          Skills
        </a>

        <a
          href="#contact"
          onClick={() => setActive("Contact")}
          className={`${baseClass} ${
            active === "Contact" ? activeClass : inactiveClass
          }`}
        >
          <i className="fa-solid fa-address-book"></i>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
