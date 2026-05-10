import skills from "../data/services";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="relative md:pt-32 pb-16 md:pb-24 overflow-hidden px-4 sm:px-6 md:px-12 py-20 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <div className="relative w-fit mx-auto">
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
            Tech Stack
          </h2>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mt-10 md:mt-12">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
