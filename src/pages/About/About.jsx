const About = () => {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-8 flex items-center">
        <div className="max-w-5xl mx-auto">
          {/* Section: About Us */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold text-primary border-b-4 border-light-border dark:border-dark-border pb-3 inline-block">
              About Us
            </h1>
            <p className="mt-6 text-lg text-light-text dark:text-dark-text">
              The Online Group-Study platform empowers students to collaborate, share knowledge, 
              and improve their academic performance through interactive learning.
            </p>
          </section>
  
          {/* Section: Our Mission */}
          <section className="mb-12 bg-white dark:bg-dark-bg p-6 rounded-lg shadow-md border border-light-border dark:border-dark-border">
            <h2 className="text-2xl font-semibold text-primary">Our Mission</h2>
            <p className="mt-4 text-light-text dark:text-dark-text">
              Our mission is to create a **supportive and engaging study environment** 
              where students can:
            </p>
            <ul className="mt-4 space-y-2 text-light-text dark:text-dark-text list-disc pl-6">
              <li>Collaborate on assignments with friends.</li>
              <li>Submit, review, and receive feedback on their work.</li>
              <li>Enhance their skills through peer learning.</li>
            </ul>
          </section>
  
          {/* Section: Why Choose Us */}
          <section className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border border-light-border dark:border-dark-border rounded-lg shadow-md bg-white dark:bg-dark-bg transition hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Collaborative Learning</h3>
              <p className="mt-2 text-sm text-light-text dark:text-dark-text">
                Study together, share assignments, and improve understanding through teamwork.
              </p>
            </div>
  
            <div className="p-6 border border-light-border dark:border-dark-border rounded-lg shadow-md bg-white dark:bg-dark-bg transition hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Smart Tracking</h3>
              <p className="mt-2 text-sm text-light-text dark:text-dark-text">
                Keep track of your assignments, grades, and progress with an intuitive dashboard.
              </p>
            </div>
  
            <div className="p-6 border border-light-border dark:border-dark-border rounded-lg shadow-md bg-white dark:bg-dark-bg transition hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Secure & Private</h3>
              <p className="mt-2 text-sm text-light-text dark:text-dark-text">
                Your assignments and data are safe with our advanced security protocols.
              </p>
            </div>
  
            <div className="p-6 border border-light-border dark:border-dark-border rounded-lg shadow-md bg-white dark:bg-dark-bg transition hover:scale-105">
              <h3 className="text-xl font-semibold text-primary">Easy-to-Use</h3>
              <p className="mt-2 text-sm text-light-text dark:text-dark-text">
                A simple and intuitive interface makes learning easier and more effective.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default About;
  