import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import useAuth from './../../hooks/useAuth';
import { Tooltip } from "react-tooltip";

const Navbar = () => {

  const {user, loading, logOut} = useAuth()

  const navigate = useNavigate();
  const handelLogOut = async () => {
    try{
      await logOut()
      navigate('/login')
    }catch(error){
      console.error(error);
      
    }
  }

  const links = (
    <>
      <li><NavLink to="/" className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition">Home</NavLink></li>
      <li><NavLink to="/about" className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition">About</NavLink></li>
      <li><NavLink to="/contact" className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition">Contact</NavLink></li>
    </>
  );
  

  return (
    <div className="navbar bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-light-text dark:text-dark-text"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-light-bg dark:bg-dark-bg rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl text-primary dark:text-dark-text font-bold"
        >
          StudyHive
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <ThemeToggle />
        {loading ? (
          <div className="border skeleton h-10 w-10 shrink-0 rounded-full"></div>
        ) : user ? (
          <div className="flex items-center gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border border- ">
                <Tooltip id="my-tooltip" className="z-50"   place="left" />
                <img
                  alt={user?.displayName}
                  src={user?.photoURL}
                  data-tooltip-id="my-tooltip" 
                  data-tooltip-content={`${user?.displayName}`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="bg-base-300 menu menu-sm dropdown-content rounded-box z-[10] mt-3 w-52 p-2 shadow dark:bg-dark-secondary dark:text-dark-text transition-colors"
            >
              <li className="text-center dark:text-gray-600">
                {user?.displayName}
              </li>
              <li>
                <button
                  onClick={handelLogOut}
                  className="btn bg-primary text-white transition-colors"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
          <button
                  onClick={handelLogOut}
                  className="btn-sm bg-primary text-white rounded-md transition-colors"
                >
                  Logout
                </button>
          </div>

        ) : (<>
            <div className="space-x-1">
              
          <Link
            to="/login"
            className="btn btn-sm bg-primary text-white transition-colors"
          >
            Login
          </Link>
              
          <Link
            to="/register"
            className="btn btn-sm bg-primary text-white transition-colors"
          >
            Register
          </Link>
            </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
