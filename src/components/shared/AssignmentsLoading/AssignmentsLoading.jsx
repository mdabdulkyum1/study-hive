
const AssignmentsLoading = () => {
  return (
    <div className="p-6 bg-light-bg dark:bg-dark-bg min-h-screen">
      <h1 className="text-2xl font-bold text-primary text-center mb-6">
        Loading Assignments...
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-dark-bg shadow-lg rounded-lg overflow-hidden animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-4 space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="flex space-x-2">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsLoading;
