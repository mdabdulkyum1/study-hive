

const Resources = () => {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold border-b-4 border-light-border dark:border-dark-border pb-2">
            Study Resources
          </h1>
          <p className="mt-4">
            Here are some valuable resources to help you with your studies.
          </p>
          <ul className="mt-4 space-y-3">
            <li className="p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-accent dark:hover:bg-dark-accent transition">
              <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer">
                Khan Academy – Free courses for various subjects
              </a>
            </li>
            <li className="p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-accent dark:hover:bg-dark-accent transition">
              <a href="https://www.coursera.org/" target="_blank" rel="noopener noreferrer">
                Coursera – Online courses from top universities
              </a>
            </li>
            <li className="p-4 border border-light-border dark:border-dark-border rounded-lg hover:bg-light-accent dark:hover:bg-dark-accent transition">
              <a href="https://www.edx.org/" target="_blank" rel="noopener noreferrer">
                edX – University-level education online
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Resources;
  