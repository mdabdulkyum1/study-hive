import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"


function Layout() {
  return (
    <div className="light:bg-light-bg dark:bg-dark-bg">
    <div className="container mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    </div>
  )
}

export default Layout