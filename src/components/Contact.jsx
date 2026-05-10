function Contact() {
  return (
    <>
      <section
        id="contact"
        className="flex justify-center px-4 sm:px-6 md:px-12 py-20 md:py-28 mb-32"
      >
        <div className="max-w-6xl md:max-w-7xl w-full mx-auto">
          <div className="relative w-fit mx-auto mb-12">
            {/* glow layer */}
            <div
              className="absolute inset-0
    blur-3xl opacity-40
    bg-gradient-to-r
    from-[#8b5cf6]
    via-[#6366f1]
    to-[#06b6d4]"
            ></div>

            {/* heading */}
            <h2
              className="relative
    text-4xl sm:text-5xl md:text-7xl
    font-black tracking-tight
    text-white"
            >
              Contact
            </h2>
          </div>
          <div
            className="grid
  grid-cols-1 md:grid-cols-[1fr_0.5fr_0.8fr]
  gap-16 md:gap-10
  mt-20"
          >
            {/* LEFT COLUMN */}
            <div>
              <div className="mb-10">
                <h4 className="text-white/40 text-lg font-semibold mb-3">
                  Email
                </h4>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=adarshasokakumar0@gmail.com"
                  className="text-white/90 text-xl hover:text-[#8b5cf6] transition"
                >
                  adarshasokakumar0@gmail.com
                </a>
              </div>

              <div className="mb-10">
                <h4 className="text-white/40 text-lg font-semibold mb-3">
                  Phone
                </h4>

                <p className="text-white/90 text-xl">+91 8547952295</p>
              </div>

              <div>
                <h4 className="text-white/40 text-lg font-semibold mb-3">
                  Location
                </h4>

                <p className="text-white/90 text-xl">Trivandrum, Kerala</p>
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div>
              <h4 className="text-white/40 text-lg font-semibold mb-2">
                Social
              </h4>

              <div className="flex flex-col">
                {[
                  {
                    name: "GitHub",
                    link: "https://github.com/adarshas-dev",
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/adarsh-as-534452227/",
                  },
                  {
                    name: "Instagram",
                    link: "https://instagram.com/adar6h_?igsh=ZWh3ZGV0aDI4c2xs",
                  },
                  // {
                  //   name: "Twitter",
                  //   link: "https://x.com",
                  // },
                ].map((social, index) => (
                  <a
                  key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group
                    inline-flex items-center gap-3
                    w-fit
                    py-3
                    border-b border-white/10
                    text-white
                    transition duration-300"
                  >
                    <span
                      className="text-2xl md:text-4xl
                      font-light
                      group-hover:text-[#b794f4]
                      transition duration-300"
                    >
                      {social.name}
                    </span>

                    <i
                      className="fa-solid fa-arrow-right
                      text-xl text-white/50
                      transition-all duration-300
                      -rotate-45
                      group-hover:text-[#b794f4]
                      group-hover:rotate-0"
                    ></i>
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="flex md:justify-end">
              <div>
                <h3
                  className="text-3xl md:text-4xl
                  leading-tight
                  font-medium text-white"
                >
                  Designed and Developed
                  <br />
                  by <span className="text-[#8b5cf6]">Adarsh A S</span>
                </h3>

                <p className="mt-8 text-white/30 text-xl">© 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
