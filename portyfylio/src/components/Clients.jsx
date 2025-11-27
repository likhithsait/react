const Clients = () => {
  return (
    <section id="skills" className="px-[60px] py-[50px]">
      <h2 className="text-white text-center mb-[20px] text-2xl font-bold">
        Skills
      </h2>

      <div className="flex gap-[10px] py-[20px] pb-[10px] overflow-x-auto whitespace-nowrap scroll-smooth justify-center items-center
      [&::-webkit-scrollbar]:h-[4px]
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:bg-gray-600
      [&::-webkit-scrollbar-thumb]:rounded-full">
        {[
          "Java",
          "Python",
          "JavaScript",
          "SQL",
          "React",
          "Streamlit",
          "Flask",
          "TensorFlow",
          "PyTorch",
          "Scikit-learn",
          "MySQL",
          "MongoDB",
          "Git",
        ].map((skill) => (
          <div
            key={skill}
            className="px-[24px] py-[12px] border border-[#2a2929] rounded-[8px] whitespace-nowrap bg-[#1a1a1a] text-white cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_10px_rgba(129,131,129,0.8)]"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
