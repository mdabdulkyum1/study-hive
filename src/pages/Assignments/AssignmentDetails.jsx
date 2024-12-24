import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const AssignmentDetails = () => {
  const assignment = useLoaderData();

  const { user } = useAuth();
  const email = user?.email;
  const { id } = useParams();
  const startDate = new Date();

  const handelSubmit = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Submit Assignment",
      html: `
       <form id="assignment-form" class="space-y-4">
  <!-- Google Docs Link -->
  <div class="flex flex-col">
    <label for="google-docs-link" class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
      Google Docs Link
    </label>
    <input 
      id="google-docs-link" 
      class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      type="url" 
      placeholder="Enter Google Docs link" 
      required 
    />
  </div>

  <!-- Quick Note -->
  <div class="flex flex-col">
    <label for="quick-note" class="text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
      Quick Note
    </label>
    <textarea 
      id="quick-note" 
      class="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder="Enter a quick note" 
      rows="3" 
      required
    ></textarea>
  </div>
</form>
      `,
      focusConfirm: false,
      confirmButtonText: "Submit",
      showCancelButton: true,
      preConfirm: async () => {
        const googleDocsLink = document
          .getElementById("google-docs-link")
          .value.trim();
        const quickNote = document.getElementById("quick-note").value.trim();

        if (!googleDocsLink || !quickNote) {
          Swal.showValidationMessage("Please fill out both fields!");
          return false;
        }

        const submittedData = {
          googleDocsLink,
          quickNote,
          assignmentId: id,
          submittedAt: startDate,
          status: "pending",
          email,
        };

        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_server_url}/submitted-assignment`,
            submittedData
          );
          if (data.insertedId) {
            return data;
          }
        } catch (error) {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: `${error.message}`,
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
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md my-11">
      <img
        src={assignment.thumbnailUrl}
        alt={assignment.title}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
        {assignment.title}
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {assignment.description}
      </p>
      <div className="text-gray-600 dark:text-gray-400 space-y-2 mb-6">
        <p>
          <strong>Marks:</strong> {assignment.marks}
        </p>
        <p>
          <strong>Difficulty:</strong> {assignment.difficulty}
        </p>
        <p>
          <strong>Due Date:</strong>{" "}
          <span className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white">
            {new Date(assignment.dueDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </p>
        <p>
          <strong>Creator:</strong> {assignment.creator.name}
        </p>
      </div>
      <button
        onClick={handelSubmit}
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-accent"
      >
        Take Assignment
      </button>
    </div>
  );
};

export default AssignmentDetails;
