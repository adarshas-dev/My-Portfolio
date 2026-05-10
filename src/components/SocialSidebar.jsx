function SocialSidebar() {
  return (
    <div
      className="fixed left-4 md:left-8 bottom-8 z-50
      flex flex-col items-center gap-6"
    >
      <a
        href="https://github.com/adarshas-dev"
        target="_blank"
        rel="noreferrer"
        className="text-white/80 hover:text-[#8b5cf6]
        transition duration-300 hover:scale-110"
      >
        <i className="fa-brands fa-github text-2xl pb-4"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/adarsh-as-534452227/"
        target="_blank"
        rel="noreferrer"
        className="text-white/80 hover:text-[#8b5cf6]
        transition duration-300 hover:scale-110"
      >
        <i className="fa-brands fa-linkedin text-2xl pb-4"></i>
      </a>

      <a
        href="https://instagram.com/adar6h_?igsh=ZWh3ZGV0aDI4c2xs"
        target="_blank"
        rel="noreferrer"
        className="text-white/80 hover:text-[#8b5cf6]
        transition duration-300 hover:scale-110"
      >
        <i className="fa-brands fa-instagram text-2xl pb-4"></i>
      </a>

      {/* vertical line */}
      {/* <div className="w-px h-20 bg-white/20"></div> */}
    </div>
  );
}

export default SocialSidebar;