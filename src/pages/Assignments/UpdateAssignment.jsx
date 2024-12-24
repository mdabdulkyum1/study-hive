import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
  const assignment = useLoaderData();
  const [startDate, setStartDate] = useState(new Date(assignment.dueDate)); 
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

      const title = e.target.title.value;
      const description = e.target.description.value;
      const marks = parseFloat(e.target.marks.value);
      const thumbnailUrl = e.target.thumbnailUrl.value;
      const difficulty = e.target.difficulty.value;
      const dueDate = startDate;

      const updateAssignment = {
            title,
            description,
            marks,
            thumbnailUrl,
            difficulty,
            dueDate,
          }
      
          try{
             const {data} = await axios.patch(`${import.meta.env.VITE_server_url}/update-assignments/${id}`, updateAssignment)
             if(data.modifiedCount > 0){
                Swal.fire({title: "Success", text:"Update successfully!", icon:"success"})
                navigate('/assignments');
             }
          }
          catch(error){
             throw error();
          }
   
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-dark:bg-dark-bg text-dark:text">
      <h2 className="text-3xl font-semibold mb-6 text-center text-primary">Update Assignment</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            defaultValue={assignment.title}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            name="description"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            defaultValue={assignment.description}
            required
          />
        </div>

        {/* Marks */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Marks</label>
          <input
            type="number"
            name="marks"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            defaultValue={assignment.marks}
            required
          />
        </div>

        {/* Thumbnail URL */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnailUrl"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            defaultValue={assignment.thumbnailUrl}
            required
          />
        </div>

        {/* Difficulty */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Difficulty</label>
          <select
            name="difficulty"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            defaultValue={assignment.difficulty}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Due Date</label>
          <DatePicker
            className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-accent"
        >
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
