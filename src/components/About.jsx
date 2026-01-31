import profileImg from "../assets/images/profile.jpeg";
import profilePort from "../assets/images/profile_port.jpeg";
function About() {
  return (
    <section className="px-6 mt-52">
      <div className="max-w-[1400px] w-full mx-auto">
        {/* Heading */}
        <h1 className=" text-6xl font-bold mb-10 block mx-auto underline underline-offset-20 decoration-[#8851efee] decoration-1 w-fit 
        bg-gradient-to-r  from-[#20e0f9ec] via-[#4593f3ee] to-[#8851efee] bg-clip-text text-transparent">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 w-full items-center">
          {/* col1 */}
          <div>
            {/* Details */}
            <div className="text-lg text-white/90">
              <p className="mb-4">
                Hi, I'm Adarsh A S, a passionate and createive UI/UX Designer
                and Fronted Developer based in Trivandrum.
              </p>
              <p className="mb-4">
                I'm cuurrently a second-year Coumputer Science student, where
                I've developed a deep interst in designing intuitive and
                visually appeaking user interfaces that bring ideas to life on
                the web.
              </p>
              <p className="mb-4">
                I'm particularly focused on modern web desing, responsive
                layouts, and interactive user experiences that blend beauty with
                functionality.
              </p>
              <p className="mb-4">Right now, I'm improving my skills in:</p>
              <p className="mb-4">#Figma and Adobe XD for UI/UX design</p>
              <p className="mb-4">
                #HTML, CSS, JavaScript, and Tailwind CSS for frontend
                development
              </p>
              <p className="mb-4">
                #Creating personal projects and exploring new web technologies
                to expand my portfolio
              </p>
            </div>
          </div>

          {/* col2 */}
          {/* Images */}
          <div
            className="w-max h-max rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            transition-shadow duration-300 "
          >
            <img
              src={profilePort}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 ease-out scale-110 hover:scale-100"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
export default About;
