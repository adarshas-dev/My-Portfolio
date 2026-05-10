import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className=" px-4 sm:px-6 md:px-12 py-20 md:py-28 ">
      <div className=" max-w-6xl md:max-w-7xl w-full mx-auto">
        <div className="relative w-fit mx-auto ">
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
            Featured Projects
          </h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
