function SkillCard({ name, icon }) {
  return (
    <div
      className="group flex flex-col items-center justify-center
      w-20 h-20 md:w-24 md:h-24
      rounded-xl
     bg-white/[0.03]
      border border-white/10
      transition duration-300
      hover:scale-110
      hover:border-[#8b5cf6]
      hover:shadow-[0_0_25px_rgba(139,92,246,0.6)]"
    >
      <img
  src={icon}
  alt={name}
  className="
    w-6 h-6 md:w-8 md:h-8

    grayscale
    brightness-75
    opacity-60

    transition duration-300

    group-hover:grayscale-0
    group-hover:brightness-100
    group-hover:opacity-100
    group-hover:scale-110
  "
/>

      <span className="mt-1 text-[10px] md:text-xs text-white/60 group-hover:text-white">
        {name}
      </span>
    </div>
  );
}

export default SkillCard;