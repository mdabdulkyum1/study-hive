import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TableLoading from "../../components/shared/TableLoading/TableLoading";

function PendingAssignments() {
  const {
    data: assignments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["pending-assignments"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_server_url}/my-attempted-assignment`
      );
      return response.data;
    },
  });

  // Handle loading state
  if (isLoading) {
    return <TableLoading />;
  }

  // Handle error state
  if (isError) {
    return <div>Error loading assignments. Please try again later.</div>;
  }

  // Filter pending assignments (those not marked yet)
  const pendingAssignments = assignments?.filter(
    (assignment) => assignment.status === "pending"
  );

  // Handle case where no pending assignments are found
  if (!pendingAssignments || pendingAssignments.length === 0) {
    return <div>No pending assignments found.</div>;
  }



  const handelGiveMark = () => {
     
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4 text-light-text dark:text-dark-text">
        Pending Assignments
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-light-border dark:border-dark-border">
          <thead>
            <tr>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Assignment Title
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Marks
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Examinee Name
              </th>
              <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.title || "No Title"}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.totalMarks || "Not Assigned"}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  {assignment.examineeName || "Unknown"}
                </td>
                <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                  <button onClick={handelGiveMark} className="px-4 py-2 bg-primary text-white rounded hover:bg-accent">
                    Give Mark
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingAssignments;
