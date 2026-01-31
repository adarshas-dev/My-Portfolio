import services from "../data/services";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <section className="px-6 mt-52">
      <div className="max-w-[1400px] w-full mx-auto">
        <h2 className="text-6xl font-bold text-center mb-10 block mx-auto underline underline-offset-20 decoration-[#8851efee] decoration-1 w-fit 
        bg-gradient-to-r  from-[#20e0f9ec] via-[#4593f3ee] to-[#8851efee] bg-clip-text text-transparent">
          Technical Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
