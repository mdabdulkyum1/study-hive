import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnim from '../../../public/lottie/login.json'
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="hero min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Right-Side Image */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={loginAnim} loop={true}></Lottie>
        </div>

        {/* Left-Side Login Form */}
        <div className="card w-full max-w-sm bg-light-bg dark:bg-dark-bg shadow-2xl">
          <h1 className="text-3xl font-bold text-light-text dark:text-dark-text text-center my-4">
            Login Now!
          </h1>
          <form className="card-body">
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-light-text dark:text-dark-text">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text"
                required
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="form-control relative">
              <label className="label">
                <span className="label-text text-light-text dark:text-dark-text">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="input input-bordered bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text pr-10 w-full"
                  required
                />
                {/* Toggle Button */}
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-light-text dark:text-dark-text"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-light-accent dark:text-dark-accent"
              >
                Forgot password?
              </a>
            </label>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button className="btn bg-primary text-white hover:bg-light-accent dark:hover:bg-dark-accent">
                Login
              </button>
            </div>
          {/* Redirect to Register */}
        <p className="text-center mt-4 text-gray-600">
          Don{`'`}t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-bold hover:underline"
          >
            Register here
          </Link>
        </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
