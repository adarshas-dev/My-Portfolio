function ServiceCard({ title, description, icon, tags }) {
  return (
    <>
      {/* bg-gradient-to-r from-red-500 to-pink-500 */}
      <div
        className="bg-white/10 backdrop-blur-xl rounded-2xl p-6
  border border-white/20
  shadow-[0_0_30px_rgba(127,77,227,0.2)]
  hover:-translate-y-1 transition duration-400 hover:shadow-[0_0_30px_rgba(127,77,227,0.3)]
  flex flex-col items-center text-center"
      >
        <div className="mb-4">
          <i
            className={`${icon} text-2xl text-[#c4a4ff]
      bg-white/10 backdrop-blur-lg
      rounded-xl p-4`}
          ></i>
        </div>

        <h3 className="text-xl font-bold text-white/95 mb-4">{title}</h3>

        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-white/10 backdrop-blur-lg
        border border-[#9a64fe] text-white/80
        px-3 py-1 rounded-full cursor-default hover:scale-103 transition hover:shadow-[0_0_30px_rgba(127,77,227,0.2)] hover:bg-white/7"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
export default ServiceCard;
