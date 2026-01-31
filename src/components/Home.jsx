import profileImg from "../assets/images/profile.jpeg";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <section className="px-100 mt-32 flex justify-center text-center">
        {/* TEXT CONTENT */}
        <div>
          <h1 className="text-8xl font-bold text-amber-50 mb-15">Adarsh A S</h1>

          <h2
            className="inline-block px-3 py-1 mb-15 text-sm font-semibold uppercase text-white/60 rounded-full
             bg-white/5 backdrop-blur-3xl border border-white/20 hover:bg-white/10 transition hover:text-white/80"
          >
            Java Full Stack Developer
          </h2>

          <p className=" text-red-200/80 text-xl mb-15">
            I create beautiful, functional, and user-centered digital
            experiences. I bring ideas to life through clean code and thoughtful design.
          </p>

          {/* DOWNLOAD CV */}
          <div className="flex gap-5 mt-3 justify-center mb-15">
            <a
              href="#project"
              className="inline-flex items-center text-lg font-semibold text-white py-4 px-8 rounded-lg 
             bg-[#8851efee] mt-2
             shadow-[0_0_30px_rgba(127,77,227,0.5)]
             hover:scale-103 transition hover:shadow-[0_0_30px_rgba(127,77,227,0.6)] hover:bg-[#8b53f5fb]"
            >
              Featured Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1NjHymmFGYI8Rln_i_pCSpsNL0cV47Zwq/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-lg font-semibold text-white py-4 px-8 rounded-lg 
             bg-white/5 backdrop-blur-2xl border border-white/20 mt-2
             hover:scale-103 transition hover:shadow-[0_0_30px_rgba(127,77,227,0.2)] hover:bg-white/7"
            >
              <i className="fa-regular fa-file mr-2 hover:"></i>
              View Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-10 justify-center text-white/30 mt-1 text-2xl">
            <a
              href="https://github.com/adarshas-dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b53f5fb] hover:scale-110 transition"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/adarsh-as-534452227/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#8b53f5fb] hover:scale-110 transition"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=adarshasokakumar0@gmail.com"
              className="hover:text-[#8b53f5fb] hover:scale-110 transition"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
