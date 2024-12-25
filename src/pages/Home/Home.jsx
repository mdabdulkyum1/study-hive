import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Study Hive</title>
      </Helmet>
      <Banner></Banner>
      <section className="py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-light-text dark:text-white mb-12">
            Key Features of Study Hive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/collaboration-icon.png"
                  alt="Collaboration"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Seamless Collaboration
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Collaborate on assignments and projects effortlessly with
                friends in real-time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/tracking-icon.png"
                  alt="Progress Tracking"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Progress Tracking
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Stay organized with detailed tracking of assignments, grades,
                and milestones.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/learning-icon.png"
                  alt="Interactive Learning"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Interactive Learning
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Engage in learning sessions with friends through quizzes,
                discussions, and more.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/grading-icon.png"
                  alt="Grading System"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Peer Grading
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Grade your friends{"'"} assignments and get instant feedback on
                your own submissions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/notifications-icon.png"
                  alt="Notifications"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Notifications
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Stay updated with assignment deadlines, grades, and group
                activities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 bg-white dark:bg-dark-background shadow-lg rounded-lg text-center">
              <div className="mb-4">
                <img
                  src="assets/security-icon.png"
                  alt="Secure Platform"
                  className="w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-accent">
                Secure Platform
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Enjoy a secure and private environment for all your study
                activities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-light-text dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                What is Study Hive?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Study Hive is an innovative platform that allows students to
                collaborate, track progress, and engage in interactive learning
                sessions for a seamless study experience.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                How do I collaborate with friends on Study Hive?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                You can invite friends to join your group and work together on
                assignments, projects, and group discussions in real-time.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                Can I track my progress on assignments?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Yes, Study Hive provides detailed tracking of your assignments,
                grades, and milestones to help you stay organized and motivated.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                Is Study Hive free to use?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Yes, the basic features of Study Hive are free to use.
                Additional premium features may be available with a subscription
                plan.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                How secure is my data on Study Hive?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Study Hive prioritizes user privacy and employs robust security
                measures to ensure your data remains safe and confidential.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="p-4 bg-white dark:bg-dark-background shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-accent">
                Can I create my own study groups?
              </h3>
              <p className="text-light-text dark:text-gray-200 mt-2">
                Absolutely! You can create and manage your own study groups,
                invite members, and organize learning sessions tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
