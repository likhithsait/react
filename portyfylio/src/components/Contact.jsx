const Contact = () => {
  return (
    <section
      id="contact"
      className="px-[60px] py-[70px] text-center"
    >
      <h2 className="text-2xl font-bold mb-2">
        Get In Touch
      </h2>

      <p className="mx-auto text-gray-500 opacity-70 w-[40%] mb-8">
        For collaboration, projects, or opportunities, feel free to reach out.
      </p>

      <form className="flex flex-col gap-[15px] items-center">
        <label className="w-[30%] text-left font-medium">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[30%] p-[12px] bg-white border border-[#444] text-black rounded-[4px]"
        />

        <label className="w-[30%] text-left font-medium">
          Mobile
        </label>
        <input
          type="text"
          placeholder="Enter mobile"
          className="w-[30%] p-[12px] bg-white border border-[#444] text-black rounded-[4px]"
        />

        <label className="w-[30%] text-left font-medium">
          Message
        </label>
        <textarea
          placeholder="Enter your message"
          className="w-[30%] h-[120px] p-[12px] bg-white border border-[#444] text-black rounded-[4px] resize-none"
        />

        <button className="mt-[20px] px-[25px] py-[14px] rounded-[6px] bg-[#33d42c] text-white font-bold text-[16px] cursor-pointer transition hover:shadow-[0_0_20px_#33d42c] hover:-translate-y-[2px]">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
