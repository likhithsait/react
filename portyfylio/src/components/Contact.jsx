const Contact = () => {
  return (
    <section
  id="contact"
  className="bg-black text-white px-[8%] py-[100px] flex justify-center"
>
  <div className="w-full max-w-[460px] text-center">
    <h2 className="text-[32px] font-bold mb-3">
      Get In Touch
    </h2>

    <p className="text-gray-400 mb-10">
      For collaboration, projects, or opportunities, feel free to reach out.
    </p>

    <form className="bg-[#0f0f0f] p-8 rounded-xl shadow-lg flex flex-col gap-5">
      <div className="text-left">
        <label className="text-sm text-gray-400">Email</label>
        <input
          className="w-full mt-1 p-3 rounded bg-white text-black"
          type="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="text-left">
        <label className="text-sm text-gray-400">Mobile</label>
        <input
          className="w-full mt-1 p-3 rounded bg-white text-black"
          type="text"
          placeholder="Enter mobile"
        />
      </div>

      <div className="text-left">
        <label className="text-sm text-gray-400">Message</label>
        <textarea
          className="w-full mt-1 p-3 h-[130px] rounded bg-white text-black resize-none"
          placeholder="Enter your message"
        />
      </div>

      <button className="mt-6 bg-green-600 py-3 rounded-md font-semibold hover:bg-green-500 transition shadow-lg">
        Submit →
      </button>
    </form>
  </div>
</section>

  );
};

export default Contact;
