function Contact() {
  return (
    <>
      <section className="px-6 mt-40 flex justify-center">
        <div>
          <h2 className="text-6xl font-bold text-center mb-10 block mx-auto underline underline-offset-20 decoration-[#8851efee] decoration-1 w-fit 
        bg-gradient-to-r  from-[#20e0f9ec] via-[#4593f3ee] to-[#8851efee] bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-10 max-w-6xl w-full items-center mb-40 mt-20">
            {/* Col1 */}
            <div className="flex justify-center flex-col">
              <h1 className="text-3xl text-white/90 font-bold mb-4">
                Let's Collaborate!
              </h1>
              <p className="text-xl text-white/70 mb-5 ">
                Let's collaborate! I am always open to discussing exciting
                projects and new opportunities.
              </p>

              <div>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adarshasokakumar0@gmail.com">
                  <p
                    className="text-xl text-white/70 mb-5 font-semibold border border-white/5 p-5 rounded-xl 
                 bg-gradient-to-r from-white/10 via-white/5 to-white/5 hover:from-white/5 
                 hover:via-white/5 hover:to-white/10 transition duration-500 
                 hover:scale-105"
                  >
                    <i class="fa-solid fa-envelope mr-2"></i>
                    adarshasokakumar0@gmail.com
                  </p>
                </a>
                <p
                  className="text-xl text-white/70 mb-5 font-semibold border border-white/5 p-5 rounded-xl 
                 bg-gradient-to-r from-white/10 via-white/5 to-white/5 hover:from-white/5 
                 hover:via-white/5 hover:to-white/10 transition duration-500 
                 hover:scale-105 cursor-default"
                >
                  <i class="fa-solid fa-phone mr-2"></i>+91 8547952295
                </p>
                <p
                  className="text-xl text-white/70 mb-5 font-semibold border border-white/5 p-5 rounded-xl 
                 bg-gradient-to-r from-white/10 via-white/5 to-white/5 hover:from-white/5 
                 hover:via-white/5 hover:to-white/10 transition duration-500 
                 hover:scale-105 cursor-default"
                >
                  <i class="fa-solid fa-location-dot mr-2"></i>Trivandrum,
                  Kerala
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-10 text-white/30 mt-3 text-xl">
                <a
                  href="https://github.com/adarshas-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9e6afffb] hover:scale-110 transition duration-500"
                >
                  <i className="fa-brands fa-github  bg-white/10 p-2 rounded-full backdrop-blur-xl border border-white/20"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/adarsh-as-534452227/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#9e6afffb] hover:scale-110 transition duration-500"
                >
                  <i className="fa-brands fa-linkedin bg-white/10 p-2 rounded-full backdrop-blur-xl border border-white/20"></i>
                </a>

                <a
                  href="wa.me/8547952295"
                  className="hover:text-[#9e6afffb] hover:scale-110 transition duration-500"
                >
                  <i class="fa-brands fa-whatsapp bg-white/10 p-2 rounded-full backdrop-blur-xl border border-white/20"></i>
                </a>
              </div>
            </div>

            {/* Col2 */}
            <div className="flex justify-center">
              <form
                className="flex flex-col gap-6
               bg-white/5 backdrop-blur-2xl
               border border-white/5
               p-10 rounded-2xl
               w-full max-w-md
               shadow-[0_0_40px_rgba(255,255,255,0.08)] hover:border-white/10 hover:bg-white/7 transition duration-500"
              >
                {/* NAME */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 -mb-1 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-3 rounded-xl
                   bg-white/1 backdrop-blur-md
                   border border-white/20
                   text-white placeholder-white/40
                   focus:outline-none focus:border-[#8851efee]
                   transition"
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 -mb-1 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-3 rounded-xl
                   bg-white/1 backdrop-blur-md
                   border border-white/20
                   text-white placeholder-white/40
                   focus:outline-none focus:border-[#8851efee]
                   transition"
                  />
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">
                  <label className="text-white/80 -mb-1 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="p-3 rounded-xl resize-none
                   bg-white/1 backdrop-blur-md
                   border border-white/20
                   text-white placeholder-white/40
                   focus:outline-none focus:border-[#8851efee]
                   transition"
                  />
                </div>

                {/* BUTTON */}
                <button
                  className="mt-4 py-3 rounded-xl
                  backdrop-blur-xl
                 border border-white/30
                 text-white font-semibold
                 bg-[#8851efee]
             shadow-[0_0_30px_rgba(127,77,227,0.5)]
             hover:scale-103 hover:shadow-[0_0_30px_rgba(127,77,227,0.6)] hover:bg-[#8b53f5fb]
                 transition duration-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
