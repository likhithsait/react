const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row justify-center items-center gap-[60px]"
    >
      {/* LEFT SIDE */}
      <div className="w-[500px] text-center flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 sm:text-xs">
          Likhith Sai Thorlikonda
        </h1>

        <p className="text-gray-400 w-[80%] leading-[24px] mb-6 text-xs">
          Computer Science Engineering student specializing in scalable software
          development and AI-driven solutions. Experienced in building
          intelligent systems, full-stack applications, and machine-learning
          models that solve real-world problems.
        </p>

        <button className="px-[25px] py-[14px] rounded-[6px] bg-[#259821] text-white font-bold text-[16px] mt-[20px] transition hover:shadow-[0_0_20px_rgba(37,152,33,1)] hover:-translate-y-[2px]">
          Let's get started →
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex justify-center">
        <div className="w-[320px] h-[320px] bg-[#555] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
