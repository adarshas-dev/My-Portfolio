function ProjectCard({ image, title, description, tags, github, demo }) {
  return (
    <div
      className="group relative overflow-hidden
        bg-white/10 backdrop-blur-xl rounded-2xl p-5
        border border-white/20
        shadow-[0_0_30px_rgba(127,77,227,0.2)]
        transition duration-300 hover:shadow-[0_0_30px_rgba(127,77,227,0.4)]
      "
    >
      <img
        src={image}
        alt={title}
        className="rounded-xl transition duration-300
          group-hover:scale-105"
      />

      <div
        className="absolute inset-0 p-5 flex flex-col justify-end
          bg-black/40 backdrop-blur-md
          opacity-100 md:opacity-0 md:group-hover:opacity-100
          translate-y-0 md:translate-y-6 md:group-hover:translate-y-0
          transition duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

        <p className="text-sm text-white/80 mb-4">{description}</p>

        <div className="flex gap-2 flex-wrap mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-lg text-white
                bg-white/10 backdrop-blur-lg
                border border-[#9a64fe]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 font-semibold text-white rounded-lg
              bg-[#8851efee]
              hover:bg-[#9a69f6fb] transition"
          >
            <i className="fa-brands fa-github mr-2"></i>
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 font-semibold text-white rounded-lg
              bg-white/10 backdrop-blur-lg
              border border-white/20
              hover:bg-white/20 transition"
          >
            <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
