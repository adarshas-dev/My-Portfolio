function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1NjHymmFGYI8Rln_i_pCSpsNL0cV47Zwq/view"
      target="_blank"
      rel="noreferrer"
      className="group fixed right-4 md:right-8 bottom-8 z-50
      flex items-center gap-2
      overflow-hidden rounded-full
      px-6 py-3
      transition duration-300"
    >

      {/* TEXT WRAPPER */}
      <div className="relative h-7 overflow-hidden">

        {/* Default text */}
        <span
          className="block text-lg font-semibold tracking-widest text-white/50
          transition duration-300
          group-hover:-translate-y-8
          group-hover:opacity-0"
        >
          RESUME
        </span>

        {/* Hover text */}
        <span
          className="absolute left-0 top-0
          text-lg font-semibold tracking-widest
          text-[#8b5cf6]
          translate-y-8 opacity-0
          transition duration-300
          group-hover:translate-y-0
          group-hover:opacity-100"
        >
          RESUME
        </span>

      </div>

      {/* STATIC ICON */}
      <i className="bi bi-file-text text-white/60 group-hover:text-[#8b5cf6] transition duration-300"></i>

    </a>
  );
}

export default ResumeButton;