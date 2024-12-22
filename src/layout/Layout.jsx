import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"


function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout