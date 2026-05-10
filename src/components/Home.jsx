function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen
      flex flex-col justify-center items-center
      text-center overflow-hidden
      px-4 sm:px-6 lg:px-8
      pt-28 md:pt-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* center glow */}
        <div
          className="absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[500px] h-[500px]
          bg-[#8b5cf6]/20
          blur-[140px]
          rounded-full"
        ></div>

        {/* top glow */}
        <div
          className="absolute top-0 left-1/4
          w-[300px] h-[300px]
          bg-cyan-500/10
          blur-[120px]
          rounded-full"
        ></div>

      </div>

      {/* SMALL STATUS */}
      <div
        className="mb-8
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl"
      >

        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

        <span className="text-sm text-white/60 tracking-wide">
          Available for Internship & Freelance
        </span>

      </div>

      {/* NAME */}
      <div className="relative">

        {/* glow text */}
        <div
          className="absolute inset-0
          blur-3xl opacity-30
          bg-[#8b5cf6]"
        ></div>

        <h1
          className="relative
          text-5xl sm:text-6xl md:text-8xl lg:text-[9rem]
          font-black tracking-tight
          text-white"
        >
          Adarsh A S
        </h1>

      </div>

      {/* ROLE */}
      <div className="animated-border mt-8 mb-10">
        <h2 className="animated-border-content">
          Java Full Stack Developer
        </h2>
      </div>

      {/* DESCRIPTION */}
      <p
        className="max-w-2xl
        text-sm sm:text-base md:text-xl
        leading-relaxed
        text-white/50"
      >
        I create immersive, responsive, and visually polished web experiences
        with modern frontend technologies and clean backend architecture.
      </p>

      {/* BUTTONS */}
      <div
        className="flex flex-wrap justify-center gap-4
        mt-12"
      >

        {/* Projects */}
        <a
          href="#projects"
          className="group
          inline-flex items-center gap-2
          px-7 py-4 rounded-full
          bg-[#8851efee]
          text-white font-medium
          transition duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
        >
          Featured Projects

          <i
            className="fa-solid fa-arrow-right
            transition duration-300
            group-hover:translate-x-1"
          ></i>
        </a>

        {/* Contact */}
        <a
          href="#contact"
          className="group
          inline-flex items-center gap-2
          px-7 py-4 rounded-full
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          text-white/70 font-medium
          transition duration-300
          hover:border-[#8b5cf6]
          hover:text-white"
        >
          Let’s Connect

          <i
            className="fa-regular fa-envelope
            transition duration-300
            group-hover:rotate-12"
          ></i>
        </a>

      </div>

      {/* BOTTOM FADE */}
      {/* <div
        className="absolute bottom-0 left-0 w-full h-32
        bg-gradient-to-b
        from-transparent
        to-black"
      ></div> */}

    </section>
  );
}

export default Home;