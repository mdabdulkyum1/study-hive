import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import useAuth from "./../../hooks/useAuth";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  const navigate = useNavigate();
  const handelLogOut = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/assignments"
          className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition"
        >
          Assignments
        </NavLink>
      </li>
    {
      user && 
      <li>
        <NavLink
          to="/pending-assignments"
          className="text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition"
        >
          Pending Assignments
        </NavLink>
      </li>
    }

    </>
  );
  const dropdownLinks = (
    <>
      <li>
        <button className="btn-sm rounded-lg">
        <NavLink
          to="/create-assignments"
          className="hover:text-light-accent dark:hover:text-dark-accent transition"
        >
          Create Assignments
        </NavLink>

        </button>
      </li>
      <li>
        <button className="btn-sm rounded-lg ">
        <NavLink
          to="/my-attempted-assignments"
          className="hover:text-light-accent dark:hover:text-dark-accent transition"
        >
          My Attempted Assignments
        </NavLink>
        </button>
       
      </li>
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
            className="menu menu-sm dropdown-content bg-light-bg dark:bg-dark-bg rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-16 rounded-lg hidden md:block"
            />
          </Link>
          <h1 className="text-xl text-primary dark:text-dark-text font-bold">
            StudyHive
          </h1>
        </div>
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
                  <Tooltip id="my-tooltip" className="z-50" place="left" />
                  <img
                    alt={user?.displayName}
                    src={user?.photoURL}
                    referrerPolicy='no-referrer'
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${user?.displayName}`}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content space-y-1 bg-light-bg  border border-transparent dark:border-white rounded-lg z-10 mt-3 p-4 shadow-lg w-64 transition-all duration-300"
              >
                {/* User Display Name */}
                <li className="text-center text-lg font-semibold  mb-2">
                  {user?.displayName || "Guest"}
                </li>

                {/* Dropdown Links */}
                <ul className="">{dropdownLinks}</ul>

                {/* Logout Button */}
                <li className="mt-2">
                  <button
                    onClick={handelLogOut}
                    className="btn btn-primary btn-sm w-full text-white hover:bg-light-accent dark:hover:bg-dark-accent dark:text-white transition-all duration-200"
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
        ) : (
          <>
            <div className="flex items-center space-x-1">
              <Link
                to="/login"
                className="btn btn-sm bg-primary text-white transition-colors"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-sm bg-primary text-white transition-colors hidden md:flex"
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
