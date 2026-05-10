function CertificateCard({ title, icon, platform, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group block h-full"
    >

      <div
        className="
        relative overflow-hidden

        h-full min-h-[220px]

        rounded-3xl
        border border-white/10

        bg-white/[0.03]
        backdrop-blur-xl

        p-6 md:p-8

        transition duration-500

        hover:border-[#8b5cf6]
        hover:-translate-y-1
        hover:shadow-[0_0_40px_rgba(139,92,246,0.18)]
      "
      >

        {/* glow */}
        <div
          className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_50%)]

          transition duration-500"
        ></div>

        {/* background icon */}
        <i
          className={`${icon}
          absolute -right-6 -bottom-6

          text-[120px]

          text-white/[0.03]

          transition duration-500
          group-hover:scale-110
          group-hover:text-[#8b5cf6]/10`}
        ></i>

        {/* top */}
        <div className="relative z-10">

          {/* platform badge */}
          <div
            className="
            inline-flex items-center gap-2

            px-3 py-1 rounded-full

            border border-white/10
            bg-white/[0.03]

            text-xs uppercase tracking-wider
            text-white/50"
          >
            {platform}
          </div>

          {/* title */}
          <h3
            className="
            mt-6

            text-2xl md:text-3xl
            font-semibold
            leading-tight

            text-white/90

            transition duration-300
            group-hover:text-white"
          >
            {title}
          </h3>

        </div>

        {/* bottom */}
        <div
          className="
          absolute bottom-6 left-6 right-6

          flex items-center justify-between"
        >

          <span
            className="
            text-sm text-white/40
            transition duration-300
            group-hover:text-white/60"
          >
            View Certificate
          </span>

          <i
            className="
            fa-solid fa-arrow-right

            text-sm text-white/40

            transition duration-300
            group-hover:text-[#8b5cf6]
            group-hover:translate-x-1"
          ></i>

        </div>

      </div>

    </a>
  );
}

export default CertificateCard;