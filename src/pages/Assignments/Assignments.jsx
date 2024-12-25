import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import AssignmentsLoading from "../../components/shared/AssignmentsLoading/AssignmentsLoading";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
import { useRef, useState } from "react";
import dataNotFoundAnim from "../../../public/lottie/dataNotFound.json";
import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';




const Assignments = () => {
  const [difficultyLevel, setDifficultyLevel] = useState("All");
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const searchRef = useRef();
  const queryClient = useQueryClient();
  const {
    data: assignments,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["assignment", { difficultyLevel, search }],
    queryFn: async () => {
      const response = await axios.get(
        `${
          import.meta.env.VITE_server_url
        }/assignments?difficultyLevel=${difficultyLevel}&search=${search}`
      );
      return response.data;
    },
    enabled: !!difficultyLevel || !!search,
  });

  if (isLoading) {
    return <AssignmentsLoading></AssignmentsLoading>;
  }
  // Handle error state
  if (isError) {
    return <div>Error loading assignments. Please try again later.</div>;
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

  const handleFilterChange = (e) => {
    const val = e.target.value;
    setDifficultyLevel(val);
    // refetching when need
    queryClient.invalidateQueries({
      queryKey: ["assignment", { difficultyLevel: val }],
    });
  };
  const handelSearch = debounce((searchValue) => {
    setSearch(searchValue);
    queryClient.invalidateQueries({
      queryKey: ["assignment", { search: searchValue }],
    });
  }, 1000);

  const handelInputChange = (e) => {
    handelSearch(e.target.value);
  };

  return (
    <>
    <Helmet>
       <title>Assignments | Study Hive</title>
    </Helmet>
    <div className="p-6 bg-light-bg dark:bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold text-primary text-center mb-6">
        Assignments
      </h1>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Difficulty Filter */}
        <div className="relative w-full max-w-xs mb-4 md:mb-0">
          <select
            className="w-full px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-1/3">
          <input
            onChange={handelInputChange}
            ref={searchRef}
            type="text"
            defaultValue={search}
            onFocus={true}
            placeholder="Search assignments..."
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <span className="absolute right-3 top-2.5 text-gray-500 dark:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Grid Layout for Assignments */}

      {!assignments || assignments.length === 0 ? (
        <div className="flex justify-center ">
          <div className="w-full md:w-1/2">
            <Lottie animationData={dataNotFoundAnim} loop={true}></Lottie>
          </div>
        </div>
      ) : (
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
                    <button className="btn btn-sm bg-primary text-white hover:bg-accent px-4 py-2 rounded">
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
      )}
    </div>
    </>

  );
};

export default Assignments;
