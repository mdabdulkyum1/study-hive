const ContactUs = () => {
    return (
      <section className="py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-light-text dark:text-white mb-12">
            Contact Us
          </h2>
          <div className="max-w-lg mx-auto">
            <form action="#" method="POST">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-light-text dark:text-dark-accent">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 text-light-text dark:text-dark-text bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
  
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-light-text dark:text-dark-accent">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 mt-2 text-light-text dark:text-dark-text bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
  
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-light-text dark:text-dark-accent">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 mt-2 text-light-text dark:text-dark-text bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message here"
                ></textarea>
              </div>
  
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  