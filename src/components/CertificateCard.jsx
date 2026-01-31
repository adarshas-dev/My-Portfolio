function CertificateCard({ title, icon, platform, link }) {
  return (
    <>
      <a href={link} target="_blank" rel="noreferrer" className="block group">
        <div
          className=" rounded-2xl p-6 border border-white/20
           shadow-[0_0_30px_rgba(127,77,227,0.2)]
            hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(127,77,227,0.3)]
            flex flex-col items-center text-center cursor-pointer bg-gradient-to-r from-white/10 via-white/5 to-white/5 hover:from-white/5 
                 hover:via-white/5 hover:to-white/10 transition duration-500"
        >
          <h3 className="text-xl text-white/95 mb-4 font-bold group-hover:scale-105 transition duration-300">
            <i
              className={`${icon} text-2xl text-[#c4a4ff] bg-white/10 backdrop-blur-lg rounded-full p-4 mr-3 
              group-hover:text-[#00ffff] group-hover:scale-102 transition duration-300`}
            ></i>
            {title}
          </h3>

          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-bold text-white/60 px-3">
              {platform}
            </span>
          </div>
        </div>
      </a>
    </>
  );
}
export default CertificateCard;
