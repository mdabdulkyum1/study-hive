import { FaUsers, FaChartLine, FaChalkboardTeacher, FaClipboardList, FaBell, FaLock } from 'react-icons/fa';

const Features = () => {
  return (
    <section className="py-16 bg-light-bg dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-light-text dark:text-white mb-12">
          Key Features of Study Hive
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaUsers className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Seamless Collaboration
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Collaborate on assignments and projects effortlessly with friends in real-time.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaChartLine className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Progress Tracking
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Stay organized with detailed tracking of assignments, grades, and milestones.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaChalkboardTeacher className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Interactive Learning
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Engage in learning sessions with friends through quizzes, discussions, and more.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaClipboardList className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Peer Grading
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Grade your friends{"'"} assignments and get instant feedback on your own submissions.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaBell className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Notifications
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Stay updated with assignment deadlines, grades, and group activities.
            </p>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center border-2 border-primary dark:border-primary">
            <div className="mb-4">
              <FaLock className="w-16 h-16 mx-auto text-primary dark:text-dark-accent" />
            </div>
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
              Secure Platform
            </h3>
            <p className="text-light-text dark:text-gray-200 mt-2">
              Enjoy a secure and private environment for all your study activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
