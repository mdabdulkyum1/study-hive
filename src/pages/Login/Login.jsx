import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnim from "../../../public/lottie/login.json";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "../../components/shared/GoogleLogin/GoogleLogin";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signUser } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handelLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    const email = formObject.email;
    const password = formObject.password;

    try {
      await signUser(email, password);
      form.reset();
      navigate("/");
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Login successfully!",
      });
    } catch (error) {
      Swal.fire({ title: "Error!", icon: "error", text: `${error.message}` });
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Study Hive</title>
      </Helmet>
      <div className="hero min-h-screen bg-light-bg dark:bg-dark-bg transition-colors">
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 px-4 sm:px-8 lg:px-16">
          {/* Right-Side Animation/Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Lottie
              animationData={loginAnim}
              loop={true}
              className="max-w-xs sm:max-w-sm lg:max-w-lg"
            />
          </div>

          {/* Left-Side Login Form */}
          <div className="card w-full lg:w-1/2 shadow-xl rounded-lg bg-light-bg dark:bg-dark-bg transition-colors">
            <div className="card-body p-6 sm:p-8 lg:p-10">
              <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-light-text dark:text-dark-text">
                Login Now!
              </h1>
              <form onSubmit={handelLogin}>
                {/* Email Input */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-light-text dark:text-dark-text">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered w-full text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border"
                    required
                  />
                </div>

                {/* Password Input with Toggle */}
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text text-light-text dark:text-dark-text">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full pr-12 text-light-text dark:text-dark-text bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border"
                      required
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-light-text dark:text-dark-text"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="form-control mb-6">
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-sm text-light-accent dark:text-dark-accent"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>

                {/* Login Button */}
                <div className="form-control mb-4">
                  <button className="btn w-full bg-primary text-white hover:bg-opacity-90">
                    Login
                  </button>
                </div>

                {/* Divider */}
                <div className="divider text-light-text dark:text-dark-text">
                  or
                </div>

                {/* Google Login */}
                <div className="form-control mb-4">
                  <GoogleLogin />
                </div>

                {/* Redirect to Register */}
                <p className="text-center text-sm text-light-text dark:text-dark-text">
                  Don{`'`}t have an account?{" "}
                  <Link to="/register" className="link link-primary font-bold">
                    Register here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
