
import { FaExternalLinkAlt } from "react-icons/fa";

const Resources = () => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-8 flex items-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-primary border-b-4 border-light-border dark:border-dark-border pb-3">
          Study Resources
        </h1>
        <p className="mt-6 text-lg text-light-text dark:text-dark-text">
          Explore these high-quality educational platforms to enhance your knowledge.
        </p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Resource Card */}
          <div className="p-5 border border-light-border dark:border-dark-border rounded-lg shadow-lg bg-white dark:bg-dark-bg transition hover:scale-105">
            <a 
              href="https://www.khanacademy.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-semibold text-primary dark:text-light-text"
            >
              Khan Academy 
              <FaExternalLinkAlt className="text-light-accent dark:text-dark-accent" />
            </a>
            <p className="mt-2 text-sm text-light-text dark:text-dark-text">
              Free courses for various subjects including math, science, and programming.
            </p>
          </div>

          <div className="p-5 border border-light-border dark:border-dark-border rounded-lg shadow-lg bg-white dark:bg-dark-bg transition hover:scale-105">
            <a 
              href="https://www.coursera.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-semibold text-primary dark:text-light-text"
            >
              Coursera
              <FaExternalLinkAlt className="text-light-accent dark:text-dark-accent" />
            </a>
            <p className="mt-2 text-sm text-light-text dark:text-dark-text">
              Online courses from top universities and institutions.
            </p>
          </div>

          <div className="p-5 border border-light-border dark:border-dark-border rounded-lg shadow-lg bg-white dark:bg-dark-bg transition hover:scale-105">
            <a 
              href="https://www.edx.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-xl font-semibold text-primary dark:text-light-text"
            >
              edX 
              <FaExternalLinkAlt className="text-light-accent dark:text-dark-accent" />
            </a>
            <p className="mt-2 text-sm text-light-text dark:text-dark-text">
              University-level education online with certificates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
