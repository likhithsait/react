const Contact = () => {
  return (
    <section id="contact"className="contact">
      <h2>Get In Touch</h2>
      <p className="section-sub">
        For collaboration, projects, or opportunities, feel free to reach out.
      </p>

      <form className="contact-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Mobile</label>
        <input type="text" placeholder="Enter mobile" />

        <label>Message</label>
        <textarea placeholder="Enter your message"></textarea>

        <button className="primary-btn">Submit </button>
      </form>
    </section>
  );
};

export default Contact;
