import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
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
        <a
          className="btn bg-primary text-white hover:bg-light-accent dark:hover:bg-dark-accent transition"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
