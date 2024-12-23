import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

function CreateAssignments() {
  const [startDate, setStartDate] = useState(new Date());
  const {user} = useAuth();

  const mutation = useMutation({
    mutationFn: (data)=> {
      return axios.post(`${import.meta.env.VITE_server_url}/create-assignments`, data);
    }
  })

  const handelSubmit =  async e => {
      e.preventDefault();

      const form = e.target;
      const formElement = new FormData(form);
      const formObject = Object.fromEntries(formElement.entries());

      const creator = {name: user?.displayName, email:user?.email }
      const marks = parseFloat(formObject.marks);
      const assignmentInfo = {...formObject, marks, creator}

      try {
        const {data} = await mutation.mutateAsync(assignmentInfo)
         if(data?.insertedId){
           form.reset();
           Swal.fire({title: "Success", text:"Successfully Assignment Data Updated server!", icon:"success"});
         }
      } catch (error) {
        console.error(error)
      } 
    
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md my-7">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Create Assignment
      </h2>
      <form onSubmit={handelSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Description
          </label>
          <textarea
            name="description"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Marks */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Marks
          </label>
          <input
            type="number"
            name="marks"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Thumbnail URL */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Thumbnail URL
          </label>
          <input
            type="text"
            name="thumbnailUrl"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Difficulty */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Difficulty
          </label>
          <select
            name="difficulty"
            className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Due Date */}
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">
            Due Date
          </label>
          <DatePicker className="px-4 py-2 border rounded-md dark:bg-gray-700 dark:text-white" selected={startDate} name="dueDate" onChange={(date) => setStartDate(date)}/>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-accent"
        >
          Create Assignment
        </button>
      </form>
    </div>
  );
}

export default CreateAssignments;
