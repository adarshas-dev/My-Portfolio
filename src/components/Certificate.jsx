import certificate from "../data/certificate";
import CertificateCard from "./CertificateCard";
function Certificate() {
  return (
    <section className="px-4 sm:px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-6xl md:max-w-7xl w-full mx-auto">
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
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mt-6 md:mt-12 items-stretch">
          {certificate.map((certi) => (
            <CertificateCard key={certi.id} {...certi} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificate;
