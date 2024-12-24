import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AssignmentsLoading from "../../components/shared/AssignmentsLoading/AssignmentsLoading";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Assignments = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: assignments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_server_url}/assignments`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <AssignmentsLoading></AssignmentsLoading>;
  }
  // Handle error state
  if (isError) {
    return <div>Error loading assignments. Please try again later.</div>;
  }
  // Handle case where no assignments are available
  if (!assignments || assignments.length === 0) {
    return <div>No assignments found.</div>;
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_server_url}/delete-assignment/${id}?email=${
              user?.email
            }`
          );
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            queryClient.invalidateQueries(["assignment"]);
          } else {
            Swal.fire({
              title: "Warning!",
              text: "You are not authorized to delete this assignment.",
              icon: "warning",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: `${error.message}`,
            icon: "error",
          });
        }
      }
    });
  };

  return (
    <div className="p-6 bg-light-bg dark:bg-dark-bg min-h-screen">
      <h1 className="text-2xl font-bold text-primary text-center mb-6">
        Assignments
      </h1>

      {/* Grid Layout for Assignments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="card bg-white dark:bg-dark-bg shadow-lg rounded-lg dark:border-dark-border border overflow-hidden"
          >
            {/* Thumbnail */}
            <img
              src={assignment.thumbnailUrl}
              alt={assignment.title}
              className="w-full h-48 object-cover"
            />

            {/* Assignment Details */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-primary dark:text-dark-accent">
                {assignment.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Marks: {assignment.marks}
              </p>
              <p
                className={`text-sm font-medium mt-2 ${
                  assignment.difficulty === "Easy"
                    ? "text-green-500"
                    : assignment.difficulty === "Medium"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                Difficulty: {assignment.difficulty}
              </p>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-between">
                <Link to={`/assignment/details/${assignment._id}`}>
                  <button
                    className="btn btn-sm bg-primary text-white hover:bg-accent px-4 py-2 rounded">
                    View
                  </button>
                </Link>

                <Link to={`/update-assignment/${assignment._id}`}>
                  <button className="btn btn-sm bg-yellow-500 text-white hover:bg-yellow-600 px-4 py-2 rounded">
                    Update
                  </button>
                </Link>

                <button
                  className="btn btn-sm bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded"
                  onClick={() => handleDelete(assignment._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Assignments;
