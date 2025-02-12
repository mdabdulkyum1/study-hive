const Contact = () => {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold border-b-4 border-light-border dark:border-dark-border pb-2">
            Contact Us
          </h1>
          <p className="mt-4">Have questions? Reach out to us.</p>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg"
            ></textarea>
            <button className="w-full p-3 bg-primary text-white rounded-lg hover:bg-light-accent dark:hover:bg-dark-accent transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;
  