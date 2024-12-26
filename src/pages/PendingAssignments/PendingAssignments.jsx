import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import TableLoading from "../../components/shared/TableLoading/TableLoading";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import noPending from "../../assets/noPending.png";
import { Helmet } from "react-helmet-async";

function PendingAssignments() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: assignments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["pending-assignments"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_server_url}/pending-assignment`
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
  const pendingAssignments = assignments?.filter(
    (assignment) => assignment.status === "pending"
  );
  const completeAssignments = assignments?.filter(
    (assignment) => assignment.status === "complete"
  );

  const handelGiveMark = async (id) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_server_url}/evaluate-assignment/${id}?email=${
          user?.email
        }`
      );

      const { totalMarks, googleDocsLink, quickNote } = data;

      if (data) {
        const { value: formValues } = await Swal.fire({
          title: "Submit Assignment",
          html: `
             <!-- Form Structure -->
<form id="assignment-form" class="space-y-4">
  <!-- Google Docs Link -->
  <div class="flex flex-col">
    <label
      for="google-docs-link"
      class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1"
    >
      Google Docs Link
    </label>
    <a
      id="google-docs-link"
      href=${googleDocsLink}
      target="_blank"
      class="text-primary underline"
    >
      Open Google Docs
    </a>
  </div>

  <!-- Quick Note -->
  <div class="flex flex-col">
    <label
      for="quick-note"
      class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1"
    >
      Examinee's Note
    </label>
          ${quickNote}
  </div>

  <!-- Marks Input -->
  <div class="flex flex-col">
    <label
      for="marks-input"
      class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1"
    >
      Marks
    </label>
    <input
      id="marks-input"
      class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      type="number"
      placeholder="Enter marks"
      min="0"
      required
    />
  </div>

  <!-- Feedback Input -->
  <div class="flex flex-col">
    <label
      for="feedback-input"
      class="text-gray-700 dark:text-gray-800 text-sm font-medium mb-1"
    >
      Feedback
    </label>
    <textarea
      id="feedback-input"
      class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Enter feedback"
      rows="3"
      required
    ></textarea>
  </div>
  </div>
</form>
            `,
          focusConfirm: false,
          confirmButtonText: "Submit",
          showCancelButton: true,
          preConfirm: async () => {
            const marksVal = document.getElementById("marks-input").value;
            const feedbackInput =
              document.getElementById("feedback-input").value;
            const marks = parseFloat(marksVal);
            if (marks > totalMarks) {
              Swal.fire({
                title: "Invalid Marks",
                text: `Marks cannot exceed the total marks of ${totalMarks}. Please enter a valid number.`,
                icon: "error",
              });
              return false;
            }

            if (!marksVal || !feedbackInput) {
              Swal.showValidationMessage("Please fill out both fields!");
              return false;
            }

            const submittedData = {
              feedBack: feedbackInput,
              obtainedMarks: marks,
              status: "complete",
            };

            try {
              const { data } = await axios.patch(
                `${
                  import.meta.env.VITE_server_url
                }/update-submitted-assignment/${id}`,
                submittedData
              );
              if (data.modifiedCount > 0) {
                Swal.fire({
                  icon: "success",
                  title: "Assignment Updated",
                  text: "The submitted assignment has been successfully evaluated!",
                  timer: 3000,
                  showConfirmButton: false,
                });
                queryClient.invalidateQueries(["pending-assignments"]);
                return true;
              }
            } catch (error) {
              console.error(error);
              Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: `An error occurred while updating the assignment: ${error.message}`,
                timer: 3000,
                showConfirmButton: false,
              });
              return null;
            }
          },
        });

        if (formValues) {
          if (formValues.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Assignment Submitted!",
              text: `Assignment successfully Done!`,
            });
          }
        }
      }
    } catch (err) {
      Swal.fire({
        title: "Access Denied",
        text: "You cannot evaluate your own submitted assignment. Please evaluate assignments submitted by others.",
        icon: "error",
      });
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title> Pending Assignments | Study Hive</title>
      </Helmet>
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

            {pendingAssignments.length > 0 ? (
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
                      <button
                        onClick={() => handelGiveMark(assignment._id)}
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-accent"
                      >
                        Give Mark
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div className="h-[60vh] my-7">
                <div className="flex items-center justify-center">
                  <img
                    src={noPending}
                    alt="Not found"
                    className="h-[430px] rounded-2xl"
                  />
                </div>
              </div>
            )}
          </table>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-light-border dark:border-dark-border">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                  Assignment Title
                </th>
                <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                  Marks (Obtained / Total)
                </th>
                <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                  Examinee Name
                </th>
                <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                  Feedback
                </th>
                <th className="border px-4 py-2 text-left text-light-text dark:text-dark-text">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {completeAssignments.map((assignment) => (
                <tr key={assignment._id.$oid}>
                  <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                    {assignment.title || "No Title"}
                  </td>
                  <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                    {assignment.obtainedMarks || 0} /{" "}
                    {assignment.totalMarks || "N/A"}
                  </td>
                  <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                    {assignment.examineeName || "Unknown"}
                  </td>
                  <td className="border px-4 py-2 text-light-text dark:text-dark-text">
                    {assignment.feedBack || "No Feedback"}
                  </td>
                  <td className="border px-4 py-2 text-light-text dark:text-dark-text flex items-center">
                    <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                    <span>Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default PendingAssignments;
