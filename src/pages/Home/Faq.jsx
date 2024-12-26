const Faq = () => {
    return (
      <section className="py-16 bg-light-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-light-text dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                What is Study Hive?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  Study Hive is an innovative platform that allows students to
                  collaborate, track progress, and engage in interactive learning
                  sessions for a seamless study experience.
                </p>
              </div>
            </div>
  
            {/* FAQ 2 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                How do I collaborate with friends on Study Hive?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  You can invite friends to join your group and work together on
                  assignments, projects, and group discussions in real-time.
                </p>
              </div>
            </div>
  
            {/* FAQ 3 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                Can I track my progress on assignments?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  Yes, Study Hive provides detailed tracking of your assignments,
                  grades, and milestones to help you stay organized and motivated.
                </p>
              </div>
            </div>
  
            {/* FAQ 4 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                Is Study Hive free to use?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  Yes, the basic features of Study Hive are free to use.
                  Additional premium features may be available with a subscription
                  plan.
                </p>
              </div>
            </div>
  
            {/* FAQ 5 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                How secure is my data on Study Hive?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  Study Hive prioritizes user privacy and employs robust security
                  measures to ensure your data remains safe and confidential.
                </p>
              </div>
            </div>
  
            {/* FAQ 6 */}
            <div className="collapse collapse-plus bg-base-200 dark:bg-gray-800">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-light-text dark:text-primary">
                Can I create my own study groups?
              </div>
              <div className="collapse-content">
                <p className="text-light-text dark:text-gray-200 mt-2">
                  Absolutely! You can create and manage your own study groups,
                  invite members, and organize learning sessions tailored to your
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq;
  