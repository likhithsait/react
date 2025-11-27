
const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col sm:flex-row justify-center items-center min-h-[90vh] px-[8%] bg-black text-white"
    >
      <div className="max-w-[520px] ">
        <h1 className="text-[44px] font-bold mb-4">
          Likhith Sai Thorlikonda
        </h1>

        <p className="text-gray-400 leading-[26px] mb-8">
          Computer Science Engineering student specializing in scalable software
          development and AI-driven solutions. Experienced in building
          intelligent systems, full-stack applications, and machine-learning
          models that solve real-world problems.
        </p>

        <div className="flex justify-center sm:justify-start">
  <a
    href="#contact"
    className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-green-600 text-white font-semibold hover:bg-green-500 transition shadow-[0_0_25px_rgba(34,197,94,0.6)]"
  >
    Let's get started →
  </a>
</div>

      </div>

      <div className="mt-10 sm:mt-0">
        <div className="w-[360px] h-[360px] rounded-full overflow-hidden bg-gray-700">
          <div className="w-full h-full rounded-full bg-[#555]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

