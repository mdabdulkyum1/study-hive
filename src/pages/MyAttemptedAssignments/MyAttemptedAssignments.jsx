import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import TableLoading from "../../components/shared/TableLoading/TableLoading";

function MyAttemptedAssignments() {
  const { user } = useAuth();

  const {
    data: attemptedAssignments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["my-assignment"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_server_url}/my-attempted-assignment?email=${
          user?.email
        }`
      );
      return response.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return <TableLoading />;
  }

  // Handle error state
  if (isError) {
    return (
      <div>Error loading attempted assignments. Please try again later.</div>
    );
  }

  // Handle case where no assignments are available
  if (!attemptedAssignments || attemptedAssignments.length === 0) {
    return <div>No attempted assignments found.</div>;
  }

  return (
    <div className="container mx-auto p-4 dark:bg-gray-800">
      <h1 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
        My Attempted Assignments
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-light-border dark:border-dark-border">
          <thead>
            <tr>
              <th className="border text-left px-4 py-2 text-light-text dark:text-dark-text">
                Assignment Title
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Status
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Total Marks
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Obtained Marks
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Feedback
              </th>
            </tr>
          </thead>
          <tbody>
            {attemptedAssignments.map((assignment) => (
              <tr key={assignment._id} className="dark:bg-gray-800">
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.title || "No Title"}
                </td>
                <td
                  className={`border px-4 py-2 flex items-center gap-1 ${
                    assignment.status === "pending"
                      ? "text-red-400"
                      : "text-green-500"
                  }`}
                >
                  <span
                    className={`inline-block w-2.5 h-2.5 rounded-full ${
                      assignment.status === "pending"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  ></span>
                  {assignment.status}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.totalMarks || "Not available"}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.obtainedMarks || "Not graded"}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.feedback || "No feedback yet"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAttemptedAssignments;
