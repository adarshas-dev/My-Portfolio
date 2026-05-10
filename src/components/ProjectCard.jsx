function ProjectCard({ image, title, description, tags, github, demo, reverse, index }) {
  return (
    <div
      className={`
      group relative overflow-hidden
      grid md:grid-cols-2 items-center
      gap-10 md:gap-16
      py-16 md:py-24
      border-b border-white/10
      ${reverse ? "md:[&>*:first-child]:order-2" : ""}
    `}
    >
      {/* IMAGE SIDE */}
      <div className="relative overflow-hidden rounded-3xl">

        {/* image */}
        <img
          src={image}
          alt={title}
          className="relative z-10 w-full h-[260px] md:h-[420px]
          object-cover rounded-3xl
          transition duration-700
          group-hover:scale-105"
        />

        {/* floating tags */}
        <div
          className="absolute bottom-4 left-4 z-20
          flex flex-wrap gap-2"
        >
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs md:text-sm
              px-3 py-1 rounded-full
              bg-black/50 backdrop-blur-xl
              border border-white/10
              text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CONTENT SIDE */}
      <div className="relative z-10">

        {/* number */}
        <span
          className="text-5xl md:text-7xl font-bold
          text-white/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* title */}
        <h3
          className="mt-4 text-3xl md:text-5xl
          font-bold text-white"
        >
          {title}
        </h3>

        {/* description */}
        <p
          className="mt-6 text-base md:text-lg
          leading-relaxed text-white/60"
        >
          {description}
        </p>

        {/* buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="group/button
            inline-flex items-center gap-2
            px-6 py-3 rounded-full
            bg-white/5 backdrop-blur-xl
            border border-white/10
            text-white/80
            transition duration-300
            hover:border-[#8851efee]
            hover:text-white"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="group/button
            inline-flex items-center gap-2
            px-6 py-3 rounded-full
            bg-[#8851efee]
            text-white
            transition duration-300
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]"
          >
            Live Demo
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;