import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateAssignments from './../pages/CreateAssignments/CreateAssignments';
import Assignments from './../pages/Assignments/Assignments';
import MyAttemptedAssignments from './../pages/MyAttemptedAssignments/MyAttemptedAssignments';
import PendingAssignments from './../pages/PendingAssignments/PendingAssignments';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/", 
                element: <Home></Home>
            }, 
            {
                path: "/create-assignments",
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path: "/assignments",
                element: <Assignments></Assignments>
            },
            {
                path: "/my-attempted-assignments",
                element: <MyAttemptedAssignments></MyAttemptedAssignments>
            },
            {
                path: "/pending-assignments",
                element: <PendingAssignments></PendingAssignments>
            },
            {},
            {},
            {},
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
]);

export default router;
