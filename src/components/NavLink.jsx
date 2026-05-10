function NavLink({ href, text, active, setActive }) {

  const isActive = active === text;

  return (
    <a
      href={href}
      className="group relative overflow-hidden h-6
      flex items-center
      text-sm uppercase tracking-wide transition duration-300"
      
    >

      {/* TEXT WRAPPER */}
      <div className="relative h-6 overflow-hidden">

        {/* Default text */}
        <span
          className="block transition-all duration-300 ease-in-out
          group-hover:-translate-y-6
          group-hover:opacity-0"
        >
          {text}
        </span>

        {/* Hover text */}
        <span
          className="absolute left-0 top-0
          translate-y-6 opacity-0
          transition-all duration-300 ease-in-out
          group-hover:translate-y-0
          group-hover:opacity-100
          text-[#8b5cf6]"
        >
          {text}
        </span>

      </div>
    </a>
  );
}

export default NavLink;