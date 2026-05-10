import { useState } from "react";
import NavLink from "./NavLink";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
        fixed top-0 left-0 w-full z-50

        bg-gradient-to-b
        from-black via-black/80 to-transparent"
      >

        <div
          className="
          max-w-7xl mx-auto

          px-4 md:px-6
          py-6 md:py-8

          flex justify-between items-center"
        >

          {/* LOGO */}
          <h1
            className="
            text-lg md:text-2xl
            font-bold tracking-widest
            text-white"
          >
            Adarsh
          </h1>

          {/* DESKTOP MENU */}
          <div
            className="
            hidden md:flex
            gap-6 lg:gap-8
            uppercase font-semibold"
          >
            <NavLink href="#home" text="Home" />
            <NavLink href="#about" text="About" />
            <NavLink href="#projects" text="Projects" />
            <NavLink href="#skills" text="Skills" />
            <NavLink href="#contact" text="Contact" />
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            md:hidden

            relative z-50

            flex flex-col justify-center items-center
            gap-1.5

            w-10 h-10"
          >

            <span
              className={`
              block h-[2px] w-6 bg-white
              transition duration-300

              ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}
            `}
            ></span>

            <span
              className={`
              block h-[2px] w-6 bg-white
              transition duration-300

              ${menuOpen ? "opacity-0" : ""}
            `}
            ></span>

            <span
              className={`
              block h-[2px] w-6 bg-white
              transition duration-300

              ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}
            `}
            ></span>

          </button>

        </div>

      </nav>

      {/* MOBILE OVERLAY MENU */}
      <div
        className={`
        fixed inset-0 z-40

        flex flex-col items-center justify-center
        gap-10

        bg-black/90 backdrop-blur-2xl

        transition-all duration-500

        ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"}
      `}
      >

        {[
          "Home",
          "About",
          "Projects",
          "Skills",
          "Contact",
        ].map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="
            text-3xl font-light tracking-wide
            text-white/70

            transition duration-300
            hover:text-[#8b5cf6]
            hover:scale-105"
          >
            {item}
          </a>
        ))}

      </div>
    </>
  );
}

export default Navbar;