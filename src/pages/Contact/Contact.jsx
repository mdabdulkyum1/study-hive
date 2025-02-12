const Contact = () => {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-8 flex items-center">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          {/* Left Section: Contact Information */}
          <div>
            <h1 className="text-4xl font-extrabold text-primary border-b-4 border-light-border dark:border-dark-border pb-3 inline-block">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-light-text dark:text-dark-text">
              Have questions or need assistance? Reach out to us, and we’ll get back to you as soon as possible.
            </p>
            <div className="mt-6 space-y-4">
              <p className="flex items-center">
                📍 <span className="ml-2">123 Study Street, Learning City</span>
              </p>
              <p className="flex items-center">
                📞 <span className="ml-2">+123 456 7890</span>
              </p>
              <p className="flex items-center">
                📧 <span className="ml-2">support@studyplatform.com</span>
              </p>
            </div>
          </div>
  
          {/* Right Section: Contact Form */}
          <div className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
            <h2 className="text-2xl font-semibold text-primary mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  required
                  className="peer w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg focus:outline-none focus:border-primary"
                />
                <label className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all">
                  Your Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  className="peer w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg focus:outline-none focus:border-primary"
                />
                <label className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all">
                  Your Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  required
                  rows="4"
                  className="peer w-full p-3 border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg rounded-lg focus:outline-none focus:border-primary"
                ></textarea>
                <label className="absolute left-3 top-3 text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary transition-all">
                  Your Message
                </label>
              </div>
              <button className="w-full p-3 bg-primary text-white rounded-lg hover:bg-light-accent dark:hover:bg-dark-accent transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  