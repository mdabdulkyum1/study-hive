import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from "./../pages/CreateAssignments/CreateAssignments";
import Assignments from "./../pages/Assignments/Assignments";
import MyAttemptedAssignments from "./../pages/MyAttemptedAssignments/MyAttemptedAssignments";
import PendingAssignments from "./../pages/PendingAssignments/PendingAssignments";
import PrivateRoute from "./PrivateRoute";
import UpdateAssignment from "../pages/Assignments/UpdateAssignment";
import AssignmentDetails from "../pages/Assignments/AssignmentDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Resources from "../pages/Resources/Resources";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "resources",
        element: <Resources></Resources>
      },
      {
        path: "about",
        element: <Resources></Resources>
      },
      {
        path: "contact",
        element: <Resources></Resources>
      },
      {
        path: "create-assignments",
        element: (
          <PrivateRoute>
            <CreateAssignments></CreateAssignments>
          </PrivateRoute>
        ),
      },
      {
        path: "assignments",
        element: <Assignments></Assignments>,
      },
      {
        path: "my-attempted-assignments",
        element: <MyAttemptedAssignments></MyAttemptedAssignments>,
      },
      {
        path: "pending-assignments",
        element: <PrivateRoute><PendingAssignments></PendingAssignments></PrivateRoute>,
      },
      {
        path: "update-assignment/:id",
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_server_url}/assignment/${params.id}`)
      },
      {
        path: "assignment/details/:id",
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_server_url}/assignment/${params.id}`)
      },
      {},
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
