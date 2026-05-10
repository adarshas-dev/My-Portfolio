import profileImg from "../assets/images/profile.jpeg";
import profilePort from "../assets/images/profile_port.jpeg";
function About() {
  return (
    <section id="about" className=" px-4 sm:px-6 md:px-12 py-20 md:py-28">
      <div className=" max-w-6xl md:max-w-7xl w-full mx-auto">
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
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 md:gap-10 w-full items-center">
          {/* col1 */}
          <div className="max-w-3xl">
            {/* small label */}
            <span
              className="
    text-sm uppercase tracking-[0.25em]
    text-[#8b5cf6]"
            >
              ABOUT ME
            </span>

            {/* intro */}
            <h3
              className="
    mt-5
    text-3xl md:text-5xl
    font-semibold
    leading-tight
    text-white"
            >
              Passionate about crafting immersive digital experiences through
              modern frontend development and thoughtful UI design.
            </h3>

            {/* description */}
            <div
              className="
    mt-8
    space-y-6
    text-base md:text-lg
    leading-relaxed
    text-white/60"
            >
              <p>
                I'm Adarsh A S, a Computer Science engineering graduate and
                frontend developer based in Trivandrum, passionate about
                building responsive, interactive, and visually engaging web
                experiences.I'm Adarsh A S, a Computer Science engineering
                graduate and frontend developer based in Trivandrum, passionate
                about creating visually refined, responsive, and interactive web
                experiences that blend creativity with functionality.
              </p>

              <p>
                I enjoy creating modern user interfaces with clean designs,
                smooth interactions, and a strong focus on user experience. My
                approach combines frontend development with UI/UX design
                principles to build websites that feel intuitive and polished.
              </p>

              <p>
                Currently, I’m improving my skills in modern web technologies
                while actively looking for opportunities to grow as a developer,
                contribute to meaningful projects, and collaborate on impactful
                digital products.
              </p>
            </div>

            {/* skills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "React",
                "Tailwind CSS",
                "JavaScript",
                "Java",
                "Spring Boot",
              ].map((item, index) => (
                <span
                  key={index}
                  className="
        px-4 py-2 rounded-full

        bg-white/[0.03]
        border border-white/10

        text-sm text-white/70

        transition duration-300
        hover:border-[#8b5cf6]
        hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* col2 */}
          {/* Images */}
          <div
            className="w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]
            transition-shadow duration-300 "
          >
            <img
              src={profilePort}
              alt="Profile"
              className="w-full h-full object-cover
transition-transform duration-500 ease-out
hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
